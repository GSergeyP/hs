import Icons from './icons';

const Listing = (props: 
                  {listingDataUl?: Array <{
                    id?: string;
                    classes?: string;
                    title?: string;
                  }>; 
                  listingDataLi: Array<{
                    id?: string,
                    classes?: string,
                    title?: number | string,
                    msg?: string,
                    handleClick?: any, ///////////////////////////
                    url?: string,
                    icons?:{
                      icon: string,
                      id?: string,
                      classes?: string,
                      position: string, // Параметр может принять left/right
                    }
                  }>;

                  children?: React.ReactNode; 
                  handleClick?: any;    ////////////////////////////////////
                }) => {

  let li = props.listingDataLi.map((content, index) => (
    <li key = {index} 
        id = {content.id} 
        className = {content.classes}
        onClick = {(props.handleClick) ? (props.handleClick) : (content.handleClick) && (content.handleClick)}
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