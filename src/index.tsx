import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './templates/header/header';
import Footer from './templates/footer/footer';
import Newsgroup from './templates/newsgroup/newsgroup';
import News from './templates/news/news';
import Error from './templates/error/error';
import './common/scss/global.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path = '/newsgroup' element = {<Newsgroup />}/>
          <Route path = '/news/:id' element = {<News />}/>
          <Route path = '/noLink' element = {<Error />}/>
          <Route path = '*' element = {<Error />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);