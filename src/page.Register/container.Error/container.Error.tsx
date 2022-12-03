import Span from '../../components/span';
import Icons from '../../components/icons';
import './container.Error.scss';

const ContainerError = () => {
  return (
    <>
      <Span spanData = {[{id: 'register-error', title: 'Ошибка ввода'}]}>
        <Icons icon = 'exclamation' id = 'register-error_svg' />
      </Span>
      <br />
    </>
  )
}

export default ContainerError;