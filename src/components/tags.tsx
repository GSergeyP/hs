import { memo } from 'react';
import Icons from './icons';

type optionTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p' | 'button' | 'ul' | 'li' | 'label';
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
  htmlFor?: string,
  icons?: icons,
  onClick?: (e: any) => void;      ////////////////////////////////////
  [key: string]: any;              ////////////////////////////////////
}

export interface tag {
  data?: attributeTags;
  children?: React.ReactNode;
  id?: string,
  classes?: string,
  htmlFor?: string,
  title?: string,
  onClick?: (e: any) => void;     ////////////////////////////////////
  type: optionTag;               
}

const Tags = ({
                type = 'h1',
                id,
                classes,
                htmlFor,
                data,
                title,
                children,
                onClick,
              }: tag): JSX.Element => {

  const Tag = `${type}` as keyof JSX.IntrinsicElements;

  return (
    <>
      {
        (data) ?
        data.map((content: attributeTags, index: number) => (               ////////////////////////////////////
          <Tag 
            key={index + Object.values(content)[0]} 
            id={(id) ? (id) : (content.id) && (content.id)}
            className={(classes) ? (classes) : (content.classes) && (content.classes)}
            htmlFor={(htmlFor) ? (htmlFor) : (content.htmlFor) && (content.htmlFor)}
            onClick={(onClick) ? (onClick) : (content.onClick) && (content.onClick)}
          >
            {
              (content.icons && content.icons.position === 'left') && 
              <Icons id = {content.icons.id} classes = {content.icons.classes} icon = {content.icons.icon}/> 
            }
            {title}
            {content.title}
            {children}
            {
              (content.icons && content.icons.position === 'right') && 
              <Icons id = {content.icons.id} classes = {content.icons.classes} icon = {content.icons.icon}/> 
            }
          </Tag>           
        )) :
        <Tag id = {id} className = {classes} onClick = {onClick}>
          {title || children}
        </Tag>
      }
    </>
  );
};

export default memo(Tags);