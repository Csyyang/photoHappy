import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/index'
import { RouterProvider, } from "react-router-dom";
import { store } from './redux/main'
import { Provider } from 'react-redux'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
)
