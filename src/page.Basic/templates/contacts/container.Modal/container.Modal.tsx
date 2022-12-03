import { useContext } from 'react';
import { Context } from '../context/context.Create';
import H2 from '../../../../components/h2';
import P from '../../../../components/p';
import Button from '../../../../components/button';
import { h2Data, pData, buttonData } from './container.Modal.Const';
import './container.Modal.scss';

const ContainerModal = (props: any) => {
  const { setContext } = useContext(Context);

  const modalClose = () => {
    setContext(false);
    props.modalClose();
  }
  return(
    <section className = {`contacts-modal ${props.close}`}>
      <article  className = {`contacts-modal__block ${props.close}`}>
        <H2 h2Data = {h2Data} />
        <P pData = {pData} />
        <Button buttonData = {buttonData} onClick = {modalClose}/>
      </article>
    </section>
  )
}

export default ContainerModal;