const Textarea = (props: { 
                    textareaData:  Array <{
                                            id?: string,
                                            classes?: string,
                                            value?: any,
                                            placeholder?: string,
                                          }>;
                    children?: React.ReactNode;                      
                    onChange?: any,                        /////////////////////////////////////////
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