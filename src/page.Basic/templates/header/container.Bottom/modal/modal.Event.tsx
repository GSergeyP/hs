import { useState } from 'react';
import Button from '../../../../../components/button';
import { buttonData } from './modal.Const';
import Modal from './modal';

// Функция для отображения/скрытия Модального окна + чтение localStorage
const ModalEvent = () => {

  const [modalEvent, setModalEvent] = useState(false),
        handleClick = () => setModalEvent(!modalEvent),
        headerModal = localStorage.getItem('headerModal');
  let labelButton: string;
  
  (headerModal) ? (labelButton = `Квартиры в ${headerModal}`) : (labelButton = 'Квартиры на сутки');

  return(
    <>
      <Button buttonData = {buttonData} onClick = {handleClick}>
        {labelButton}
      </Button>
      {(modalEvent) && (<Modal isModalToggle = {handleClick} />)}
    </>
  )
}



export default ModalEvent;