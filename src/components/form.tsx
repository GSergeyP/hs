const Form = (props: { 
                formData:  Array <{
                                    id?: string,
                                    classes?: string,
                                  }>;
                children?: React.ReactNode;  //////////////////////////////////
              }) => {
  return(
    <>
      {
        props.formData.map((content, index) => (
          <form key = {index} 
                id = {content.id} 
                className = {content.classes}
          >
            {props.children}           
          </form>
        ))
      }
    </>
  )
}

export default Form;