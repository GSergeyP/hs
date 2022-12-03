import { attributeTags } from './INTERFACE';

const H4 = (props: { 
              h4Data: attributeTags[];
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