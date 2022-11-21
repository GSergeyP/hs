const P = (props: { 
            pData:  Array <{
                            id?: string,
                            classes?: string,
                            title: string,
                          }>;
            children?: React.ReactNode; 
          }) => {
return(
    <>
      {
        props.pData.map((content, index) => (
          <p  key = {index} 
              id = {content.id} 
              className = {content.classes}
          >
            {props.children}
            {content.title}            
          </p>
        ))
      }
    </>
  )
}
export default P;