import express from 'express';
import 'dotenv/config';
import pg from 'pg';
const app = express();
const port = process.env.SERVER_PORT || 3000;
const { Client } = pg;
const pgClient = new Client({
  host: 'db',
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

app.get('/products', async (req, res) => {
  try {
    const result = await pgClient.query(
      'SELECT "Name" as name FROM "Production"."Product" LIMIT 5;'
    );
    res.json(result.rows[0]);
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
