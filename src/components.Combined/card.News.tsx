import Div from '../components/div';
import Img from '../components/img';
import H3 from '../components/h3';
import P from '../components/p';
import Button from '../components/button';
import Links from '../components/links';

const CardNews = (props: {
                    divDataTop: Array<{
                                        classes?: string,
                                      }>;
                    imgData: Array<{
                                    classes: string,
                                    src: string,
                                    alt: string,
                                  }>;
                    h3Data: Array<{
                                    classes: string,
                                    title: string,
                                  }>;  
                    pData: Array<{
                                  classes: string,
                                  title: string,
                                }>; 
                    divDataBottom: Array<{
                                          classes?: string,
                                        }>; 
                    buttonData: Array<{
                                        classes: string,
                                        title: string,
                                      }>; 
                    linksData: Array<{
                                      classes: string,
                                      title: string,
                                      url: string,
                                    }>;                        
}) => {


  return(
    <>
    <Div divData = {props.divDataTop}>
      <Img imgData = {props.imgData} />
      <H3 h3Data = {props.h3Data} />
      <P pData = {props.pData} />
      <Div divData = {props.divDataBottom}>
        <Button buttonData={props.buttonData} />
        <Links linksData = {props.linksData} />
      </Div>
    </Div>
    </>
  )
}; 

export default CardNews;