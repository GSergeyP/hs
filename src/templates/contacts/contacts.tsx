import  { useEffect, useState } from 'react';
import { Context } from './context/context.Create';
import ContainerInfo from './container.Info/container.Info';
import ContainerForm from './container.Form/container.Form';
import ContainerNetwork from './container.Network/container.Network';
import ContainerModal from './container.Modal/container.Modal';
import Loader from '../loader/loader';
import './contacts.scss';

const Contacts = () => {

  const [context, setContext] = useState([{user: '', mail: '', msg: ''}]),
        [modalShow, setModalShow] = useState(false),
        [close, setClose] = useState('close'),
        [isLoading, setIsLoading] = useState(true);
        
  useEffect(() => {
    setTimeout(() => {setIsLoading(false);}, 1000)

    if(context[0].user &&
       context[0].mail &&
       context[0].msg) {
      if(context[0].user !== 'error' && 
         context[0].mail !== 'error' &&
         context[0].msg !== 'error') {
           setModalShow(true);
           setClose('');
      }
    } 
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