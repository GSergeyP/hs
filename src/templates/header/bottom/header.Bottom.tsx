import Img from '../../../components/img';
import Links from '../../../components/links';
import Button from '../../../components/button';
import { imgData, linksData, buttonData } from './header.Bottom.Const';
import ModalEvent from './modal/modal.Event';
import './header.Bottom.scss';

const HeaderBottom = () => {
  return(
    <section className = 'header-bottom'>
      <Img imgData = {imgData} />
      <Links linksData = {linksData} />
      <Button buttonData = {buttonData} />
      <ModalEvent />
    </section>
  )
}

export default HeaderBottom;