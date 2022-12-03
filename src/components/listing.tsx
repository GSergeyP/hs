import Icons from './icons';
import { attributeTags } from './INTERFACE';

const Listing = (props: {
                  listingDataUl?: attributeTags[];  
                  listingDataLi: attributeTags[];
                  children?: React.ReactNode; 
                  onClick?: (e: any) => void;    ////////////////////////////////////
                }) => {

  let li = props.listingDataLi.map((content, index) => (
    <li key = {index} 
        id = {content.id} 
        className = {content.classes}
        onClick = {(props.onClick) ? (props.onClick) : (content.onClick) && (content.onClick)}
    >
      {
        (content.icons && content.icons.position === 'left') && 
        <Icons id = {content.icons.id} classes = {content.icons.classes} icon = {content.icons.icon}/> 
      }
      {props.children}
      {content.title}
      {(content.msg) && <span>{content.msg}</span>}
      {
        (content.icons && content.icons.position === 'right') && 
        <Icons id = {content.icons.id} classes = {content.icons.classes} icon = {content.icons.icon}/> 
      }
    </li>
  ));
  return(
    <>
    {
      (props.listingDataUl) ?
        props.listingDataUl.map((content, index) => (
          <ul key = {index} id = {content.id} className = {content.classes}>
            {content.title}
            {li}
          </ul>
        )) 
      : 
        <ul>{li}</ul>
    } 
    </>
  )

}

export default Listing;