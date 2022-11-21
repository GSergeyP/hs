const H4 = (props: { 
      h4Data:  Array <{
        id?: string,
        classes?: string,
        title: string,
      }>;
    }) => {
    return(
    <>
      {
        props.h4Data.map((content, index) => (
          <h4 key = {index} id = {content.id} className = {content.classes}>
            {content.title}            
          </h4>
        ))
      }
    </>
  )
}

export default H4;