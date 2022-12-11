import CardNews from '../../../../components.Combined/card.News';
import PaginationEvent from '../../../../components.Elements/pagination/pagination.Event';
import { attributeTags } from '../../../../components/tags';
import Loader from '../../loader/loader';
import './container.Newsgroup.scss';

const ContainerNewsgroup = (props: {message: string; 
                                    newsListCurrentData: object[]; 
                                    newsList: object[];
                                    currentPage: number;
                                    onPageChange: (e: any) => void;                ////////////////////////////////////////////////////
                                    isLoading: boolean;
                                  }) => {

  if(props.isLoading) return(<article><Loader /></article>);
  else return(
    <>
    <article className = 'newsgroup-container'>
        {props.message}
        {     
          props.newsListCurrentData.map((content: attributeTags, index: number) => ( 
            <CardNews 
              key = {index + Object.values(content)[2]}                   ///////////////////////////////////
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
