import Img from '../../../../components/img';
import Links from '../../../../components/links';
import Tags from '../../../../components/tags';
import { imgData, linksData, buttonData } from './container.Bottom.Const';
//import ContainerModal from './container.Modal/container.Modal';

import './container.Bottom.scss';

const ContainerBottom = () => {
  return(
    <article className='header-bottom'>
      <Img data={imgData} />
      <Links data={linksData} />
      <Tags type='button' data={buttonData} />
      {/*<ContainerModal />*/}
    </article>
  )
}

export default ContainerBottom;