const H3 = (props: { 
      h3Data:  Array <{
        id?: string,
        classes?: string,
        title: string,
      }>;
    }) => {
    return(
    <>
      {
        props.h3Data.map((content, index) => (
          <h3 key = {index} id = {content.id} className = {content.classes}>
            {content.title}            
          </h3>
        ))
      }
    </>
  )
}

export default H3;