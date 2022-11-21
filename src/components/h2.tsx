const H2 = (props: { 
      h2Data:  Array <{
        id?: string,
        classes?: string,
        title: string,
      }>;
    }) => {
    return(
    <>
      {
        props.h2Data.map((content, index) => (
          <h2 key = {index} id = {content.id} className = {content.classes}>
            {content.title}            
          </h2>
        ))
      }
    </>
  )
}

export default H2;