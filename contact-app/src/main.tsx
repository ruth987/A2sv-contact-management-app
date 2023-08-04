import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/Root";

import { action as destroyAction } from "./routes/DeleteContact";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Contact, {loader as contactLoader,action as contactAction,} from "./routes/Contact";
import ErrorPage from './ErrorPage';
import EditContact,{
  action as editAction,
}  from './routes/EditContact';
import Index from './routes/index';

const router = createBrowserRouter([{
  path : "/",
  element : <Root />,
  errorElement : <ErrorPage />,
  loader: rootLoader,
  action: rootAction,
  children : [
    { index: true, element: <Index /> },
    {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
    },
    {
      path: "contacts/:contactId/edit",
      element: <EditContact />,
      loader: contactLoader,
      action: editAction,
    },
    {
      path: "contacts/:contactId/destroy",
      action: destroyAction,
      errorElement:  <div>Oops! There was an error.</div>,
    },
    

  ],

},

]);

// This is the root layout of the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
