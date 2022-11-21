import Icons from './icons';

const Button = (props: { 
                  buttonData:  Array <{
                                        id?: string,
                                        classes?: string,
                                        title?: string,
                                        icons?: {
                                          icon: string,
                                          id?: string,
                                          classes?: string,
                                          position: string, // Параметр может принять left/right
                                        }
                                      }>;
                  children?: React.ReactNode; 
                  handleClick?: any;                        ////////////////////////////////////
                }) => {
  return(
    <>
      {
        props.buttonData.map((content, index) => (
          <button key = {index} 
                  id = {content.id} 
                  className = {content.classes}
                  onClick = {(props.handleClick) && props.handleClick}
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