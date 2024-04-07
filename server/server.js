import express from 'express';
import * as dotenv from 'dotenv';
import pg from 'pg';
import cors from 'cors';
const app = express();
const port = process.env.SERVER_PORT || 3000;
dotenv.config({ path: '../.env' });

app.use(cors());
const { Client } = pg;
const pgClient = new Client({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

await pgClient.connect();

app.get('/', async (_, res) => {
  try {
    const result = await pgClient.query(
      'SELECT version();'
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Something went wrong' });
  }
});

app.get('/product', async (req, res) => {
  const filter = req.query.name;
  try {
    const result = await pgClient.query(
      `SELECT "Name" as name, "ProductID" as id
      FROM "Production"."Product"
      WHERE "Name" ILIKE '%${filter}%' LIMIT 5`
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Something went wrong',
      error,
    });
  }
});

app.get('/product-safe', async (req, res) => {
  // Parametrizovaný dotaz
  const sql =
    'SELECT "Name" as name, "ProductID" as id FROM "Production"."Product" WHERE "Name" ILIKE $1 LIMIT 5';
  const values = [`%${req.query.name}%`];
  try {
    const result = await pgClient.query(sql, values);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Something went wrong',
      error,
    });
  }
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
