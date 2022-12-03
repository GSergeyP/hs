import Links from '../../../../components/links';
import { linksData } from './container.Network.Const';
import './container.Network.scss'

const ContainerNetwork = () => {
  return(
    <article id = 'contacts-link'>
      <Links linksData = {linksData} />
    </article>
  )
}

export default ContainerNetwork;