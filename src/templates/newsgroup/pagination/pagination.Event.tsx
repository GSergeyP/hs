import { DOTS  } from './pagination.Const';
import Pagination from './pagination';
import Listing from '../../../components/listing';
import './pagination.Event.scss';

const PaginationEvent = (props: {
                                    totalCount: number,
                                    currentPage: number,
                                    onPageChange: any,                             /////////////////////////////////////////////
                                  }) => {


  const paginationRange: any = Pagination(props.totalCount, props.currentPage);   ////////////////////////////////////////////

  let listingDataLi: Array<{}> = [];

    paginationRange.map((content: number | string) => {
      (content === DOTS) ? 
        listingDataLi.push({classes: 'newsgroup-pagination__item', title: content}) :
      (content === props.currentPage) ? 
        listingDataLi.push({classes: 'newsgroup-pagination__item active', title: content, handleClick: () => props.onPageChange(content)}) :
        listingDataLi.push({classes: 'newsgroup-pagination__item', title: content, handleClick: () => props.onPageChange(content)})
      return listingDataLi;
    })

  return(
    <Listing listingDataUl = {[{id: 'newsgroup-pagination'}]} listingDataLi = {listingDataLi}/>
  )
}

export default PaginationEvent;