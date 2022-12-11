import Tags from '../../../components/tags';
import Links from '../../../components/links';
import Img from '../../../components/img';
import { ulData, liData, divData1, linksData1, h4Data,  divData2, linksData2, imgData } from './footer.Const';
import './footer.scss';

const Footer = () => {
return(
  <footer id='footer'>
    <Tags type='ul' data={ulData}>
      <Tags type='li' data={liData} />
    </Tags>
    <Tags type='div' data={divData1}>
      <Links data={linksData1} />
    </Tags>
    <Tags type='h4' data={h4Data} />
    <Tags type='div' data={divData2}>
      <Links data={linksData2} />
    </Tags>
    <Img data={imgData} />
  </footer>
)
}

export default Footer;