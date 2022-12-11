import Tags from '../components/tags';
import Img from '../components/img';
import Links from '../components/links';

const CardNews = (props: {
                    divDataTop: object[];
                    imgData: object[];
                    h3Data: object[];  
                    pData: object[]; 
                    divDataBottom: object[]; 
                    buttonData: object[]; 
                    linksData: object[];                        
}) => {

  return(
    <Tags type='div' data={props.divDataTop}>
      <Img data={props.imgData} />
      <Tags type='h3' data={props.h3Data} />
      <Tags type='p' data={props.pData} />
      <Tags type='div' data={props.divDataBottom}>
        <Tags type='button' data={props.buttonData} />
        <Links data={props.linksData} />
      </Tags>
    </Tags>
  )
}; 

export default CardNews;