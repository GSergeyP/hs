import Links from '../../../components/links';
import { linksData } from './header.Top.Const';
import './header.Top.scss';

const HeaderTop = () => {
  return(
    <section className = 'header-top'>
      <Links linksData = {linksData} />
    </section>
  )
}

export default HeaderTop;