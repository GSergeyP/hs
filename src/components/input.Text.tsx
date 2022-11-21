const InputText = (props: { 
                    inputTextData:  Array <{
                                            id?: string,
                                            classes?: string,
                                            placeholder?: string,
                                          }>;
                    value?: string,
                    onChange?: any,                        /////////////////////////////////////////
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