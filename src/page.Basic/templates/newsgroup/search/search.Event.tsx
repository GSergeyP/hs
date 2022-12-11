import { useState } from 'react';
import Form from '../../../../components/form';
import InputText from '../../../../components/input.Text';
import Tags from '../../../../components/tags';
import Search from './search';
import './search.Event.scss';



const SearchEvent = (props: any) => {                        //////////////////////////////////////////////////////

  const [keywordInput, setKeywordInput] = useState<string>('');

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    const newsList: Array<{
                              id: number,
                              img: string,
                              title: string,
                              msg: string,
                              date: string
                            }> = props.newsList;

    let newsListSearch;

    (keywordInput) ? ( newsListSearch = Search(keywordInput, newsList)) : (newsListSearch = null);

    props.getData(newsListSearch);
    props.isLoadedClick();
    setKeywordInput('');
    return newsListSearch;
  }

  return(
    <Form data = {[{id: 'newsgroup-form'}]}>
      <InputText data = {[{id: 'newsgroup-form__input', placeholder: 'Поиск по статьям'}]} 
        value = {keywordInput} 
        onChange = {(e: any) => setKeywordInput(e.target.value)}  //////////////////////////////////////////////////////
      />
      <Tags type='button' 
            data={[{id: 'newsgroup-form__buttom', icons:{icon: 'loupe', id: 'newsgroup-form__buttom-svg', position: 'left'}}]}
            onClick = {handleClick}
      />
    </Form>
  )
}

export default SearchEvent;