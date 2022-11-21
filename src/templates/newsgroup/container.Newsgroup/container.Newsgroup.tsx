import CardNews from '../../../components.Combined/card.News';
import PaginationEvent from '../pagination/pagination.Event';
import Loader from '../../loader/loader';
import './container.Newsgroup.scss';

const ContainerNewsgroup = (props: {message: string; 
                                    newsListCurrentData: Array<{}>; 
                                    newsList: Array<{}>;
                                    currentPage: number;
                                    onPageChange: any;                ////////////////////////////////////////////////////
                                    isLoading: boolean;
                                  }) => {

  if(props.isLoading) return(<article><Loader /></article>);
  else return(
    <>
    <article className = 'newsgroup-container'>
        {props.message}
        {     
          props.newsListCurrentData.map((content: any, index: number) => ( 
            <CardNews 
              key = {index}
              divDataTop = {[{classes: 'newsgroup-container__item'}]}
              imgData = {[{classes: 'newsgroup-container__item-img', src: content.img, alt: 'SDAEM.BY'}]}
              h3Data = {[{classes: 'newsgroup-container__item-h3', title: content.title}]}
              pData = {[{classes: 'newsgroup-container__item-p', title: content.msg}]}
              divDataBottom = {[{classes: 'newsgroup-container__item-button'}]}
              buttonData = {[{classes: 'newsgroup-container__item-button__left', title: content.date}]}
              linksData = {[{classes: 'newsgroup-container__item-button__right', title: 'Читать', url: `news/${content.id}`}]}
             />
          ))
        }
      </article>
        {
          (props.newsList.length > 0) &&
          <article>
            <PaginationEvent
              currentPage = {props.currentPage} 
              totalCount = {props.newsList.length} 
             
              onPageChange = {props.onPageChange}
            /> 
          </article>
        }
    </>
  )
}

export default ContainerNewsgroup;
