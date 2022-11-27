const Label = (props: { 
                    labelData:  Array <{
                                        id?: string,
                                        classes?: string,
                                        title?: string,
                                      }>;
                    children?: React.ReactNode;  //////////////////////////////////                      
                  }) => {
  return(
    <>
      {
        props.labelData.map((content, index) => (  
          <label key = {index} 
                    id = {content.id} 
                    className = {content.classes}
          >
            {content.title}
            {props.children}
          </label>
        ))
      }
    </>
  )
}

export default Label;