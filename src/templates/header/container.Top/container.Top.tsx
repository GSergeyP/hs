import Links from '../../../components/links';
import { linksData } from './container.Top.Const';
import './container.Top.scss';

const ContainerTop = () => {
  return(
    <article className = 'header-top'>
      <Links linksData = {linksData} />
    </article>
  )
}

export default ContainerTop;