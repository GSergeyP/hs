import Span from '../../../components/span';
import Icons from '../../../components/icons';
import './container.Modal.Error.scss';

const ContainerModalError = () => {
  return (
    <>
      <Span spanData = {[{id: 'contacts-error', title: 'Ошибка ввода'}]}>
        <Icons icon = 'exclamation' id = 'contacts-error_svg' />
      </Span>
      <br />
    </>
  )
}

export default ContainerModalError;