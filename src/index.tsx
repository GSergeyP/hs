import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './templates/header/header';
import Footer from './templates/footer/footer';
import Newsgroup from './templates/newsgroup/newsgroup';
import './common/scss/global.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Newsgroup />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);