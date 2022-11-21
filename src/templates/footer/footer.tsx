import Listing from '../../components/listing';
import Links from '../../components/links';
import H4 from '../../components/h4';
import Img from '../../components/img';
import { listingDataUlLeft, listingDataLiLeft, linksData, h4Data, listingDataUlBottom, listingDataLiBottom, imgData } from './footer.Const';
import './footer.scss';

const Footer = () => {
return(
  <footer id = 'footer'>
    <Listing listingDataUl = {listingDataUlLeft} listingDataLi = {listingDataLiLeft} />
    <div id = 'footer-right'>
      <Links linksData = {linksData} />
    </div>
    <H4 h4Data = {h4Data} />
    <Listing listingDataUl = {listingDataUlBottom} listingDataLi = {listingDataLiBottom} />
    <Img imgData = {imgData} />
  </footer>
)
}

export default Footer;