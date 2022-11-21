const Img = (props: { 
              imgData: Array<{
                              src: string,        //require('./../../common/img/logo.png')
                              id?: string,
                              classes?: string,
                              alt: string,
                            }>; 
            }) => {
  return(
    <>
      {
        props.imgData.map((content, index) => (
          <img key = {index} 
              id = {content.id} 
              className = {content.classes}
              src = {content.src}  
              alt = {content.alt} />
          )
        )
      }
    </>
  )
}

export default Img;