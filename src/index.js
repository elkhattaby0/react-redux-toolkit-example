import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './Redux-toolkit/store';

import Read from './Pages/Read';
import Create from './Pages/Create';
import Update from './Pages/Update';

const Menu = () => {
  return (
    <>
      <nav>
        <Link to="/">Lists Products</Link>
        <Link to="/add">Add Product</Link>
      </nav>
      <Outlet />
    </>
  )
}
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Menu />} >
                <Route index element={<Read />} />
                <Route path='/add' element={<Create />} />
                <Route path='/edit/:ref' element={<Update />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();