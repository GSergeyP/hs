import Listing from '../../components/listing';
import Links from '../../components/links';
import H4 from '../../components/h4';
import Div from '../../components/div';
import Img from '../../components/img';
import { listingDataUl, listingDataLi, divData1, linksData1, h4Data,  divData2, linksData2, imgData } from './footer.Const';
import './footer.scss';

const Footer = () => {
return(
  <footer id = 'footer'>
    <Listing listingDataUl = {listingDataUl} listingDataLi = {listingDataLi} />
    <Div divData = {divData1}>
      <Links linksData = {linksData1} />
    </Div>
    <H4 h4Data = {h4Data} />
    <Div divData = {divData2}>
      <Links linksData = {linksData2} />
    </Div>
    <Img imgData = {imgData} />
  </footer>
)
}

export default Footer;