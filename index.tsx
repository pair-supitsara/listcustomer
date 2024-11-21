import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css';
import App from "./App.tsx";
import Home from './pages/Home.tsx';
import List from './pages/List.tsx';
import { Provider } from 'react-redux'
import store from './store/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //loader: rootLoader,
    children: [
      {
        path: "home",
        element: <Home />
        //loader: teamLoader,
      },
      {
        path: "list",
        element: <List />
        //loader: teamLoader,
      },
    ],
  }
]);
const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found. Check your HTML file.");
}
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);