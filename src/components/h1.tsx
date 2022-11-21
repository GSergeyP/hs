const H1 = (props: { 
      h1Data:  Array <{
        id?: string,
        classes?: string,
        title: string,
      }>;
    }) => {
    return(
    <>
      {
        props.h1Data.map((content, index) => (
          <h1 key = {index} id = {content.id} className = {content.classes}>
            {content.title}            
          </h1>
        ))
      }
    </>
  )
}

export default H1;