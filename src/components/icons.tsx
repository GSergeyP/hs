import IconsFile from '../common/svg/icons.svg';

const Icons = ({id, classes, icon}: {id?: string, classes?: string, icon: string}) => {
  return(
    <svg id = {id} className = {classes}>
      <use xlinkHref = { `${IconsFile}#${icon}` }></use>
    </svg> 
  )
}

export default Icons