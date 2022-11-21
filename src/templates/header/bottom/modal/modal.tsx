// Внешний вид Модального окна + Функция для записи в localStorage
import Listing from '../../../../components/listing';
import { listingDataUl, listingDataLi } from './modal.Const';
import './modal.scss';

const citySelect = (id: string) => {
  const sity: any = listingDataLi.find(item => item.id === id);                    ////////////////////////////////////
  localStorage.setItem('headerModal', sity.title);
}

const Modal = (props: {isModalToggle: any} ) => {                                 ////////////////////////////////////
  const handleClick = (event: { currentTarget: { id: string; }; }) => {
    let id = event.currentTarget.id;
    citySelect(id);
    let isModalToggle = props.isModalToggle;
    isModalToggle();
  }

  return(
   <>
    <Listing listingDataUl = {listingDataUl} listingDataLi = {listingDataLi} handleClick  = { handleClick }>
      Квартиры на сутки в
    </Listing>
   </>
  ) 
}
export default Modal;

