import React from "react";
import './index.css'
import {Provider} from 'react-redux'
import ReactDOM from "react-dom/client"
import {RouterProvider } from "react-router";
import { router } from "./app/router";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
