
const Span = (props: {
                spanData: Array<{
                                  id?: string,
                                  classes?: string,
                                  title?: string,
                                }>;
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