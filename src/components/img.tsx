import { memo } from 'react';


export interface attributeTags {
  id?: string,
  classes?: string,
  src?: string,             
  alt?: string,            
}

const Img = (props: { 
              data: attributeTags[]; 
            }) => {
  return(
    <>
      {
        props.data.map((content, index) => (
          <img key = {index} 
              id = {content.id} 
              className = {content.classes}
              src = {content.src}  
              alt = {content.alt} />
          )
        )
      }
    </>
  )
}

export default memo(Img);