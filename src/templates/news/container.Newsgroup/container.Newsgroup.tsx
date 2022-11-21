import H3 from '../../../components/h3';
import CardNews from '../../../components.Combined/card.News';
import Loader from '../../loader/loader';
import './container.Newsgroup.scss'

const ContainerNewsgroup = (props: {newsgroup: Array<{}>}) => { ////////////////////////////////////////////
  
  if (props.newsgroup.length === 0 || !props.newsgroup) return (
    <article className = 'news-container active'>
      <H3 h3Data = {[{classes: 'news-container__h3', title: 'Читайте также' }]} />
      <Loader />
    </article>
  )
  else  return(
    <article className = 'news-container'>
        <H3 h3Data = {[{classes: 'news-container__h3', title: 'Читайте также' }]} />
        <div className = 'news-container__block'>
          {  
            props.newsgroup.map((content: any, index: number) => (                     ///////////////////////////////////////////////
              <CardNews 
                key = {index}
                divDataTop = {[{classes: 'news-container__block-item'}]}
                imgData = {[{classes: 'news-container__block-item__img', src: content.img, alt: 'SDAEM.BY'}]}
                h3Data = {[{classes: 'news-container__block-item__h3', title: content.title}]}
                pData = {[{classes: 'news-container__block-item__p', title: content.msg}]}
                divDataBottom = {[{classes: 'news-container__block-item__button'}]}
                buttonData = {[{classes: 'news-container__block-item__button-left', title: content.date}]}
                linksData = {[{classes: 'news-container__block-item__button-right', title: 'Читать', url: `news/${content.id}`}]}
              />
            ))
          }
        </div>
    </article>
  )
}
export default ContainerNewsgroup;