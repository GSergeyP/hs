import Img from '../../../components/img';
import Links from '../../../components/links';
import Button from '../../../components/button';
import { imgData, linksData, buttonData } from './container.Bottom.Const';
import ModalEvent from './modal/modal.Event';
import './container.Bottom.scss';

const ContainerBottom = () => {
  return(
    <article className = 'header-bottom'>
      <Img imgData = {imgData} />
      <Links linksData = {linksData} />
      <Button buttonData = {buttonData} />
      <ModalEvent />
    </article>
  )
}

export default ContainerBottom;