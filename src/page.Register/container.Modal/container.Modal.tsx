//import { useDispatch } from 'react-redux';
//import { pageBasic } from '../../redux/pageSlice';
import Div from '../../components/div';
import H2 from '../../components/h2';
import P from '../../components/p';
import Button from '../../components/button';
import { divData, h2Data, pData, buttonData } from './container.Modal.Const';
import './container.Modal.scss';

const ContainerModal = (props: any) => {
  /*const dispatch = useDispatch();
  const modalClose = () => { /////////////////////////////////////////////
    props.setModalOpen(false);
    console.log(props)
    dispatch(pageBasic());
  }*/

  return(
    <main id = 'register'>
      <Div divData = {divData}>
        <H2 h2Data = {h2Data} />
        <P pData = {pData} />
        <Button buttonData = {buttonData} onClick = {props.onClick}/>
      </Div>
    </main>
  )
}

export default ContainerModal;