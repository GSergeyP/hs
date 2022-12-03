import Span from '../../../../components/span';
import Icons from '../../../../components/icons';
import './container.Error.scss';

const ContainerError = () => {
  return (
    <>
      <Span spanData = {[{id: 'contacts-error', title: 'Ошибка ввода'}]}>
        <Icons icon = 'exclamation' id = 'contacts-error_svg' />
      </Span>
      <br />
    </>
  )
}

export default ContainerError;