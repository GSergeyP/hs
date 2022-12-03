import { attributeTags } from './INTERFACE';

const Textarea = (props: { 
                    textareaData: attributeTags[];
                    children?: React.ReactNode;                      
                    onChange?: (e: any) => void,                        /////////////////////////////////////////
                  }) => {
  return(
    <>
      {
        props.textareaData.map((content, index) => (  
          <textarea key = {index} 
                    id = {content.id} 
                    className = {content.classes}
                    placeholder = {content.placeholder}
                    value = {content.value}
                    onChange = {props.onChange}
          >
            {props.children}
          </textarea>
        ))
      }
    </>
  )
}

export default Textarea;