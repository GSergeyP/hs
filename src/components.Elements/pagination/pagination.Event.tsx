import { DOTS  } from './pagination.Const';
import Pagination from './pagination';
import Tags from '../../components/tags';
import './pagination.Event.scss';

const PaginationEvent = (props: {
                                    totalCount: number,
                                    currentPage: number,
                                    onPageChange: any,                             /////////////////////////////////////////////
                                  }) => {


  const paginationRange: any = Pagination(props.totalCount, props.currentPage);   ////////////////////////////////////////////

  let lidata: object[] = [];

    paginationRange.map((content: number | string) => {
      (content === DOTS) ? 
        lidata.push({classes: 'newsgroup-pagination__item', title: content}) :
      (content === props.currentPage) ? 
        lidata.push({classes: 'newsgroup-pagination__item active', title: content, onClick: () => props.onPageChange(content)}) :
        lidata.push({classes: 'newsgroup-pagination__item', title: content, onClick: () => props.onPageChange(content)})
      return lidata;
    })

  return(
    <Tags type='ul' id='newsgroup-pagination'>
      <Tags type='li' data={lidata} />
    </Tags> 
  )
}

export default PaginationEvent;