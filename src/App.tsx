import './App.css';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Homepage from './views/Homepage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homepage />} />
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
