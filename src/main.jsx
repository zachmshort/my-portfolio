import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import "./index.css";
import Home from "./pages/Home";
import App from './App';
import Contact from './pages/Contact';
import About from './pages/About';
import Websites from './pages/Websites';
import Models from './pages/Models';
import Videos from './pages/Videos';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Websites',
        element: <Websites />,
      },
      {
        path: '/Models',
        element: <Models />,
      },
      {
        path: '/Videos',
        element: <Videos />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);