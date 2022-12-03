import Icons from './icons';
import { attributeTags } from './INTERFACE';

const Button = (props: { 
                  buttonData: attributeTags[];
                  children?: React.ReactNode; 
                  onClick?: (e: any) => void;                        ////////////////////////////////////
                }) => {
  return(
    <>
      {
        props.buttonData.map((content, index) => (
          <button key = {index} 
                  id = {content.id} 
                  className = {content.classes}
                  onClick = {(props.onClick) && props.onClick}
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
          </button>
        ))
      }
    </>
  )
}

export default Button;