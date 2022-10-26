import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/index'
import { RouterProvider, } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={Router} />
)
