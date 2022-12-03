import { attributeTags } from './INTERFACE';

const Label = (props: { 
                labelData: attributeTags[];
                children?: React.ReactNode;                   
              }) => {
  return(
    <>
      {
        props.labelData.map((content, index) => (  
          <label key = {index} 
                    id = {content.id} 
                    className = {content.classes}
                    htmlFor = {content.for}
          >
            {content.title}
            {props.children}
          </label>
        ))
      }
    </>
  )
}

export default Label;