import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './Layout';
import './index.css';



export  const App = React.memo(() => {
  return (<>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </>);

});

