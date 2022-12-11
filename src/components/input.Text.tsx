import { memo } from 'react';

export interface attributeTags {
  id?: string,
  classes?: string,
  placeholder?: string,
}

const InputText = (props: { 
                    data: attributeTags[];
                    value?: string,
                    onChange?: (e: any) => void,                        /////////////////////////////////////////
                  }) => {
  return(
    <>
      {
        props.data.map((content, index) => (  
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

export default memo(InputText);