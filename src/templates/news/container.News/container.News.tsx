import Links from '../../../components/links';
import Icons from '../../../components/icons';
import H4 from '../../../components/h4';
import H2 from '../../../components/h2';
import Button from '../../../components/button';
import Img from '../../../components/img';
import P from '../../../components/p';
import Listing from '../../../components/listing';
import { listingDataUl, listingDataLi } from './container.News.Const';
import Loader from '../../loader/loader';
import './container.News.scss';

const ContainerNews = (props: {newsHeader: Array<{}>, newsBody: Array<{}>}) => {      /////////////////////////////////////////////
  if (props.newsHeader.length === 0 || !props.newsHeader) return (
    <article className='news-block'>
      <Loader />
    </article>
  )
  else  return(
    <>
      {
        props.newsHeader.map((content: any, index: number) => (                    ////////////////////////////////////////////////
          <article key = {index}>
            <Links linksData = {[{url: 'noLink', icons: {icon: 'house', id : 'news-house', position: 'left'} }]} />
            <Links linksData = {[{id: 'news-crumbs', title: 'Новости', url: 'newsgroup'}]} />
            <Icons id = 'news-point' icon = 'point' />
            <H4 h4Data = {[{id: 'news-h4', title: content.title}]} />
            <H2 h2Data = {[{id: 'news-h2', title: content.title}]} />
            <Button buttonData = {[{id: 'news-button', title: content.date}]} />
            <Listing listingDataUl = {listingDataUl} listingDataLi = {listingDataLi} />
            <Img imgData = {[{src: content.img, id: 'news-img', alt: 'SDAEM.BY' }]} />
            <Icons icon = 'points' id = 'news-points' />
            {
              props.newsBody.map((content: any, index: number) =>(                     ////////////////////////////////////////////////
                <P key = {index} pData = {[{classes: 'news-p', title: content.title}]} />
              )) 
            }
          </article>
        ))
      }
    </>
  )
}

export default ContainerNews;