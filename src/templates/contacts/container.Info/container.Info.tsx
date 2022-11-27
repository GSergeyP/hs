import H2 from '../../../components/h2';
import P from '../../../components/p';
import Listing from '../../../components/listing';
import Links from '../../../components/links';
import { h2Data, pData, listingDataUl, listingDataLi, linksData } from './container.Info.Const';
import './container.Info.scss';

const ContainerInfo = () =>  {
  return(
    <article>
      <H2 h2Data = {h2Data} />
      <P pData = {pData} />
      <Listing listingDataUl = {listingDataUl} listingDataLi = {listingDataLi} />
      <Links linksData = {linksData} />
    </article>
  )
}

export default ContainerInfo;