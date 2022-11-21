import H1 from '../../components/h1';
import P from '../../components/p';
import Links from '../../components/links';
import { h1Data, pData, linksData } from './error.Const';
import Icons from '../../components/icons';
import './error.scss';

const Error = () => {
  return(
    <section id = 'error'>
      <H1 h1Data = {h1Data} />
      <P pData = {pData} />
      <Icons icon = 'error' id = 'error-svg__error' />
      <Icons icon = 'points' id = 'error-svg__points-left' />
      <Icons icon = 'points' id = 'error-svg__points-right' />
      <Links linksData = {linksData} />
    </section>

  )
}

export default Error;