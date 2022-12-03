import { attributeTags } from './INTERFACE';

const Span = (props: {
                spanData: attributeTags[];
                children?: React.ReactNode;
              }) => {
  return(
    <>
      {
        props.spanData.map((content, index) => (
          <span key = {index} id = {content.id} className = {content.classes}>
            {content.title}
            {props.children}
          </span>
        ))
      }
    </>
  )
}

export default Span;