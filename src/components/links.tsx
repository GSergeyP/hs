import { memo } from 'react';
import { Link } from 'react-router-dom';
import Icons from './icons';

type optionPosition = 'left' | 'right';

export interface icons {
  icon: string,
  id?: string,
  classes?: string,
  position: optionPosition, 
  [key: string]: any;              ////////////////////////////////////     
}

export interface attributeTags {
  id?: string,
  classes?: string,
  title?: string,
  url?: string,             
  icons?: icons,
  [key: string]: any;              ////////////////////////////////////  
}

const Links = (props: {
                data: attributeTags;
                active?: string,
                children?: React.ReactNode;
                onClick?: (e: any) => void;     ////////////////////////////////////
              }) => {
  return(
    <>
      {
        props.data.map((content: attributeTags, index: number) => (
          <Link key={index + Object.values(content)[0] + content.url} 
                to={`/${content.url}`} 
                id={content.id}
                className={(props.active && content.classes === props.active) ? (content.classes + ' active') : content.classes }
                onClick={props.onClick}
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

export default memo(Links);

//(content.classes === props.active) ? (content.classes + ' active') :