import { Suspense, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ConnectNews from './connect/connect';
import ContainerNews from './container.News/container.News';
import ContainerNewsgroup from './container.Newsgroup/container.Newsgroup';
import { newsgroupPage } from './news.Const';
import './news.scss';

const News = () => {
  let { id } = useParams();
  
const [newsgroup, setNewsgroup] = useState<any>([]),                           //////////////////////////////////////////////
      [newsHeader, setNewsHeader] = useState<any>([]),                         //////////////////////////////////////////////
      [newsBody, setNewsBody] = useState<any>([]);                             //////////////////////////////////////////////
      
const navigate = useNavigate(); // Для перенаправления

useEffect(() => {

  let newsgroup: Array<{}> = [],
      news: Array<{}> = [],
      newsBody: any;                                                            ////////////////////////////////////////////
  
  setNewsHeader([]);
  setNewsgroup([]);
  
  ConnectNews()
    .then((resp) => {

      for(let i = 0; i < newsgroupPage; i++) {
        let idRandom = Math.floor(Math.random() * (resp[0].data.length - 1));

        (resp[0].data[idRandom].id !== Number(id)) ? newsgroup.push(resp[0].data[idRandom]) : i--;
      }
      
      setTimeout(() => { setNewsgroup(newsgroup);} , 3000);

      resp.map((data) => { 
        const dataCarent = data.data.filter((item: any) => item.id === Number(id));         //////////////////////////////////////////////
        news.push(dataCarent);
        return news;
      })
      setTimeout(() => { setNewsHeader(news[0]);} , 1000);

    newsBody = news[1];
    (newsBody.length > 0) ? setNewsBody(newsBody[0].msg) : setNewsBody([{title: 'Извините, ведутся технические работы'}]);

    })
    .catch((err) => {if(err) navigate('/noLink');});
}, [id, navigate])

  return(
    <section id = 'news'>
      <Suspense>
        <ContainerNews newsHeader = {newsHeader} newsBody = {newsBody} />
      </Suspense>
      <Suspense>
        <ContainerNewsgroup newsgroup = {newsgroup} />
      </Suspense>
    </section>
  )
}

export default News;