import { attributeTags } from './INTERFACE';

const InputText = (props: { 
                    inputTextData: attributeTags[];
                    value?: string,
                    onChange?: (e: any) => void,                        /////////////////////////////////////////
                  }) => {
  return(
    <>
      {
        props.inputTextData.map((content, index) => (  
          <input  type = 'text'
                  autoComplete = 'off'
                  key = {index} 
                  id = {content.id} 
                  className = {content.classes}
                  placeholder = {content.placeholder}
                  value = {props.value}
                  onChange = {props.onChange}
          />
        ))
      }
    </>
  )
}

export default InputText;