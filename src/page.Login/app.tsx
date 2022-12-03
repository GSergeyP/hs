import { useEffect, useRef } from 'react';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { login, pageBasic, pageRegister } from '../redux/pageSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import H2 from '../components/h2';
import P from '../components/p';
import Button from '../components/button';
import Label from '../components/label';
import Icons from '../components/icons';
import Span from '../components/span';
import Div from '../components/div';
import { h2Data, pData, buttonData, labelData, spanData, divData } from './app.Const';
import ContainerError from './container.Error/container.Error';
import './app.scss';

interface Inputs  {
  login: string,
  password: string,
};

const App = () => {

  const error = useSelector((state: RootState) => state.page.error),
        dispatch = useDispatch(),
        ref = useRef(null);

  const { 
    register, 
    handleSubmit,
    resetField,
    setError,
    formState: { errors }

  } = useForm<Inputs>({defaultValues: {login: '', password: ''}}), 

  onSubmit: SubmitHandler<Inputs> = (data) => dispatch(login(data));

  useEffect(() => {
    
    if(error) {
      resetField('login');
      resetField('password');
      setError('login', {type: 'required', message: '' });
      setError('password', {type: 'required', message: '' });
    }
          
    // Вызов addEventListener для закрытия авторизации 
    // по клику за пределами формы
    const handleClick = (event: any) => {                         //////////////////////////////////////////////
      let target = event.target;

      (!target.closest('#login-form')) && dispatch(pageBasic());

    };

      const element: any = ref.current;                            ////////////////////////////////////////////////
      element.addEventListener('click', handleClick);

      return () => {
        element.removeEventListener('click', handleClick);
    };
    /////////////////////////////////////////////
  }, [error, errors, setError, resetField, dispatch])

  return (
    <main id = 'login' ref = {ref}>
      <Div divData = {divData}>
        <H2 h2Data = {h2Data} />
        <P pData = {pData} />
        <Button buttonData = {buttonData}/>
        <Button 
          buttonData={[{classes: 'login-form__button bottom', title: 'Создайте акканут'}]} 
          onClick = {() => dispatch(pageRegister())}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type = 'checkbox' id = 'login-form__checkbox' />
          <Label labelData = {labelData} />
          <br />

          <input type = 'text' 
                className = 'login-form__input'
                {...register('login', { 
                  required: true,
                  validate: value => !!value.trim(),
                  pattern: /^[A-Z]{3,15}$/i,
                })} 

                placeholder = 'Логин'
                autoComplete = 'off'
                style = {{borderColor: (errors.login) && '#EB5757'}}
          />
          <Icons icon = 'user' classes = 'login-form__svg' />
          {(errors.login) && <Icons icon = 'exclamation' classes = 'login-form__svg-error' />}

          <input type = 'password' 
                className = 'login-form__input'
                {...register('password', { 
                  required: true, 
                  pattern: /^[0-9A-Z!@#$%^&*]{5,20}$/i,
                  validate: value => !!value.trim(),
                })}
                placeholder = 'Пароль'
                autoComplete = 'new-password'
                style = {{borderColor: (errors.password) && '#EB5757'}}
          />
          <Icons icon = 'password' classes = 'login-form__svg' />
          {(errors.password) && <Icons icon = 'exclamation' classes = 'login-form__svg-error' />}

          <Span spanData = {spanData}>
            {(errors.login || errors.password) && <ContainerError />}
            <input type = 'submit' id = 'login-form__button' value = 'Войти' />
          </Span>
        </form>
      </Div>
    </main>
  ); 
}

export default App;
