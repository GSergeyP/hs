import { useEffect, useState } from 'react';
//import { useDispatch } from 'react-redux';
//import { pageBasic, pageLogin } from '../../../../redux/pageSlice';
import Links from '../../../../components/links';
import Img from '../../../../components/img';
import Tags from '../../../../components/tags';
import { linksData, buttonDataOpen, buttonDataClose } from './container.Top.Const';
import './container.Top.scss';

const ButtonOpen = (props: any) => {                                             ///////////////////////////
  return(
    <Tags type='button' data={buttonDataOpen} onClick={props.onClick} />
  )
}

const ButtonClose = (props: any) => {                                            ///////////////////////////
  const LOCALSTORAGE: any = localStorage.getItem('sessionID'),                   ///////////////////////////
  data = JSON.parse(LOCALSTORAGE);
  return(
    <Tags type='button' data={buttonDataClose} onClick={props.onClick}>
      {(data) && <Img data={[{id: 'header-top__img', src: data[0].url, alt: 'SDAEM.BY'}]} />}
      {(data) && data[0].name}
    </Tags>
  )
}

const ContainerTop = () => {
 // const dispatch = useDispatch(),
   const  LOCALSTORAGE: any = localStorage.getItem('sessionID'),                   ///////////////////////////
        [authorization, setAuthorization] = useState(false);
  
  useEffect(() => {
    (LOCALSTORAGE) ? setAuthorization(true) : setAuthorization(false) 
  }, [LOCALSTORAGE])

  const buttonClose = () => {
    //dispatch(pageBasic());
    setAuthorization(false);
  }

  const buttonOpen = () => {
   // dispatch(pageLogin());
    setAuthorization(true);
  }
  
  return(
    <article className='header-top'>
      <Links data={linksData} />
      {(authorization) ? <ButtonClose onClick={buttonClose}/> : <ButtonOpen onClick={buttonOpen}/>}
    </article>
  )
}

export default ContainerTop;