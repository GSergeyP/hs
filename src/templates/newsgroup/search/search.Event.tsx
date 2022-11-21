import { useState } from 'react';
import Form from '../../../components/form';
import InputText from "../../../components/input.Text";
import Button from '../../../components/button';
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
    <Form formData = {[{id: 'newsgroup-form'}]}>
      <InputText inputTextData = {[{id: 'newsgroup-form__input', placeholder: 'Поиск по статьям'}]} 
        value = {keywordInput} 
        onChange = {(e: any) => setKeywordInput(e.target.value)}  //////////////////////////////////////////////////////
      />
      <Button 
        buttonData = {[{id: 'newsgroup-form__buttom', icons:{icon: 'loupe', id: 'newsgroup-form__buttom-svg', position: 'left'}}]} 
        handleClick = {handleClick}
      />
    </Form>
  )
}

export default SearchEvent;