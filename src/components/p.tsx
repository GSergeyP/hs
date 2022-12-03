import Icons from './icons';
import { attributeTags } from './INTERFACE';

const P = (props: { 
            pData: attributeTags[];
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
           {
            (content.icons && content.icons.position === 'left') && 
              <Icons id = {content.icons.id} classes = {content.icons.classes} icon = {content.icons.icon}/> 
          }
          {props.children}
          {content.title}
          {
            (content.icons && content.icons.position === 'right') && 
              <Icons id = {content.icons.id} classes = {content.icons.classes} icon = {content.icons.icon}/> 
          }         
          </p>
        ))
      }
    </>
  )
}
export default P;