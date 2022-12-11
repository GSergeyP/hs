import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './templates/header/header';
import Footer from './templates/footer/footer';
import Newsgroup from './templates/newsgroup/newsgroup';


const App = () => {
  return(
    <>
    <BrowserRouter>
      <Header />
      <main>
        <Newsgroup />
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;