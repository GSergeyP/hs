import { useState, useMemo, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import ConnectNewsList from './connect/connect';
import { newsListPage } from './pagination/pagination.Const';
import SearchEvent from './search/search.Event';
import Icons from '../../components/icons';
import H2 from '../../components/h2';
import H4 from '../../components/h4';
import ContainerNewsgroup from './container.Newsgroup/container.Newsgroup';
import './newsgroup.scss';


const Newsgroup = () => {
  
 const newsListSearch = (newsListSearch: any) => {    //////////////////////////////////////////////
    if(newsListSearch === null || newsListSearch.length === 0) {
      setNewsList([]);
      setMessage([<span key={'err'}>Измените критерии поиска</span>]);
    }
    else {
      setNewsList(newsListSearch);
      setCurrentPage(1);
      setMessage('');
    }
  }

  const [currentPage, setCurrentPage] = useState(1),
        [newsList, setNewsList] = useState([]),
        [newsListCopy, setNewsListCopy] = useState([]),
        [message, setMessage] = useState<any>();    ////////////////////////////////////////////////////////
  const [isLoading, setIsLoading] = useState(false);
        
const navigate = useNavigate(); // Для перенаправления

  useEffect(() => {

    ConnectNewsList()
      .then((resp) => { 
        setNewsList(resp.data); 
        setNewsListCopy(resp.data);
        isLoadedClick();
      })
      .catch((err) => {if(err) navigate('/noLink');});

  }, [navigate]);

  const newsListCurrentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * newsListPage, 
          lastPageIndex = firstPageIndex + newsListPage; 
    return newsList.slice(firstPageIndex, lastPageIndex);
  }, [newsList, currentPage]);
  

  const isLoadedClick = () => {
    setIsLoading(true);
    setTimeout(() => {setIsLoading(false);}, 1000);
  }

  return(
    <section id = 'newsgroup'>
      <article>
        <Icons id = 'newsgroup-house' icon = 'house' />
        <Icons id = 'newsgroup-point' icon = 'point' />
        <H4 h4Data = {[{id: 'newsgroup-h4', title: 'Новости'}]} />
        <H2 h2Data = {[{id: 'newsgroup-h2', title: 'Новости'}]} />
        <SearchEvent getData = {newsListSearch} newsList = {newsListCopy} isLoadedClick = {isLoadedClick} />
      </article>
      <Suspense>

        <ContainerNewsgroup 
          message = {message}
          newsListCurrentData = {newsListCurrentData}
          newsList = {newsList}
          currentPage = {currentPage}
          onPageChange = {(page: number) =>{ 
                            setCurrentPage(page); 
                            isLoadedClick();
                          }}
          
          isLoading = {isLoading}
        />
      </Suspense>
    </section>
  )
}

export default Newsgroup;