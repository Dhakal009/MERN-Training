import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter, Routes, Route} from "react-router"


import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={App}>
        <Route path="" Component={HomePage} />
        <Route path="products/:id" Component={ProductDetailPage} />
        <Route path="login" Component={Login} />
        <Route path="cart" Component={Cart} />  
      </Route>
    </Routes>
  </BrowserRouter>
)
