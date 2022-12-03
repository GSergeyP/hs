import { Link } from 'react-router-dom';
import Icons from './icons';
import { attributeTags } from './INTERFACE';

const Links = (props: {
                linksData: attributeTags[];
                children?: React.ReactNode;
              }) => {
  return(
    <>
      {
        props.linksData.map((content, index) => (
          <Link key = {index} 
                to = {`/${content.url}`} 
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
          </Link>
        ))
      }
    </>
  )
}

export default Links;