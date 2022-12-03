import { attributeTags } from './INTERFACE';

const Form = (props: { 
                formData: attributeTags[];
                children?: React.ReactNode; 
              }) => {
  return(
    <>
      {
        props.formData.map((content, index) => (
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

export default Form;