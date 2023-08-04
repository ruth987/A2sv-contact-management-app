import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/Root";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Contact, {loader as contactLoader} from "./routes/Contact";
import ErrorPage from './ErrorPage';
import EditContact,{
  action as editAction,
}  from './routes/EditContact';

const router = createBrowserRouter([{
  path : "/",
  element : <Root />,
  errorElement : <ErrorPage />,
  loader: rootLoader,
  action: rootAction,
  children : [
    {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
    },
    {
      path: "contacts/:contactId/edit",
      element: <EditContact />,
      loader: contactLoader,
      action: editAction,
    }

  ],

},

]);

// This is the root layout of the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
