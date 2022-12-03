import { attributeTags } from './INTERFACE';

const Div = (props: {
              divData: attributeTags[];
              children?: React.ReactNode;
            }) => {
  return(
    <>
      {
        props.divData.map((content, index) => (
          <div key = {index} id = {content.id} className = {content.classes}>
            {content.title}
            {props.children}
          </div>
        ))
      }
    </>
  )
}

export default Div;