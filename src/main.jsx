import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import AddPastry from './Components/AddPastry.jsx';
import UpdateCoffee from './Components/UpdateCoffee';
import UpdatePastry from './Components/UpdatePastry';

import Root from './Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee'),
    children: [
      {
        path: "/",
        element: <Root></Root>,
      },
    ],

  },

  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "addPastry",
    element: <AddPastry></AddPastry>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "updatePastry/:id",
    element: <UpdatePastry></UpdatePastry>,
    loader: ({ params }) => fetch(`http://localhost:5000/pastry/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
