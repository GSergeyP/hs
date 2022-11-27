import Icons from './icons';

const P = (props: { 
            pData:  Array <{
                            id?: string,
                            classes?: string,
                            title: string,
                            icons?:{
                              icon: string,
                              id?: string,
                              classes?: string,
                              position: string,     // Параметр может принять left/right 
                            }
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