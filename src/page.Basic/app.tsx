import { BrowserRouter } from 'react-router-dom';
import Header from './templates/header/header';
import Footer from './templates/footer/footer';
import Contacts from './templates/contacts/contacts';

const App = () => {
  return(
    <>
    <BrowserRouter>
      <Header />
      <main>
        <Contacts />
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;