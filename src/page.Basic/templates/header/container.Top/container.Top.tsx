import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pageBasic, pageLogin } from '../../../../redux/pageSlice';
import Links from '../../../../components/links';
import Button from '../../../../components/button';
import Img from '../../../../components/img';
import { linksData, buttonData } from './container.Top.Const';
import Icons from '../../../../components/icons';
import './container.Top.scss';

const ButtonOpen = (props: any) => {      //////////////////////////////////////
  return(
    <Button buttonData = {buttonData} onClick = {props.onClick} />
  )
}

const ButtonClose = (props: any) => {     /////////////////////////////////////////////
  const LOCALSTORAGE: any = localStorage.getItem('sessionID'),
  data = JSON.parse(LOCALSTORAGE);
  return(
    <Button buttonData = {[{classes: 'header-top__right close'}]} onClick = {props.onClick}>
      {(data) && <Img imgData = {[{id: 'header-top__img', src: data[0].url, alt: 'SDAEM.BY'}]} />}
      {(data) && data[0].name}
      <Icons icon = 'mark' id = 'header-top__svg' />
    </Button>
  )
}

const ContainerTop = () => {
  const dispatch = useDispatch(),
        LOCALSTORAGE: any = localStorage.getItem('sessionID'),   ///////////////////////////////////
        [authorization, setAuthorization] = useState(false);
  
  useEffect(() => {
    (LOCALSTORAGE) ? setAuthorization(true) : setAuthorization(false) 
  }, [LOCALSTORAGE])

  const buttonClose = () => {
    dispatch(pageBasic());
    setAuthorization(false);
  }

  const buttonOpen = () => {
    dispatch(pageLogin());
    setAuthorization(true);
  }
  
  return(
    <article className = 'header-top'>
      <Links linksData = {linksData} />
      {(authorization) ? <ButtonClose onClick ={buttonClose}/> : <ButtonOpen onClick ={buttonOpen}/>}
    </article>
  )
}

export default ContainerTop;



