import { attributeTags } from './INTERFACE';

const H1 = (props: { 
              h1Data: attributeTags[];
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