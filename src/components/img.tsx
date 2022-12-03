import { attributeTags } from './INTERFACE';

const Img = (props: { 
              imgData: attributeTags[]; 
            }) => {
  return(
    <>
      {
        props.imgData.map((content, index) => (
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

export default Img;