import { memo } from 'react';

export interface attributeTags {
  id?: string,
  classes?: string,
}

const Form = (props: { 
                data: attributeTags[];
                children?: React.ReactNode; 
              }) => {
  return(
    <>
      {
        props.data.map((content, index) => (
          <form key = {index} 
                id = {content.id} 
                className = {content.classes}
          >
            {props.children}           
          </form>
        ))
      }
    </>
  )
}

export default memo(Form);