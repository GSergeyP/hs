import { useEffect, useState } from 'react';
import { Context } from './context/context.Create';
import ContainerInfo from './container.Info/container.Info';
import ContainerForm from './container.Form/container.Form';
import ContainerNetwork from './container.Network/container.Network';
import ContainerModal from './container.Modal/container.Modal';
import Loader from '../loader/loader';
import './contacts.scss';

const Contacts = () => {

  const [context, setContext] = useState(false),
        [modalShow, setModalShow] = useState(false),
        [close, setClose] = useState('close'),
        [isLoading, setIsLoading] = useState(true);
        
   useEffect(() => {
    setTimeout(() => {setIsLoading(false);}, 1000);

    (context) && setModalShow(true);
    (context) && setClose('');
  },[context])

  const modalClose = () => { 
    setTimeout(() => {setModalShow(false);}, 1000); 
    setClose('close');
  }

  if(isLoading) return(<article><Loader /></article>);
  else return(
    <>        
      <Context.Provider value = {{context, setContext}}>
        <section id = 'contacts'>
          <ContainerInfo />
          <ContainerForm />
          <ContainerNetwork />
        </section>
        {(modalShow) && <ContainerModal modalClose = {modalClose} close = {close} />}
      </Context.Provider>
    </>
  )
}

export default Contacts;