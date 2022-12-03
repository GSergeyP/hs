import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageBasic, pageLogin, registers } from '../redux/pageSlice';
import { RootState } from '../redux/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import H2 from '../components/h2';
import P from '../components/p';
import Img from '../components/img';
import Div from '../components/div';
import { h2Data, pData, imgData, divData, buttonData } from './app.Const';
import Icons from '../components/icons';
import Button from '../components/button';
import ContainerError from './container.Error/container.Error';
import ContainerModal from './container.Modal/container.Modal';
import './app.scss';




type Inputs = {
  login: string,
  mail: string,
  password: string,
  passwordCopy: string,
};

const App = () => {

  const error = useSelector((state: RootState) => state.page.error),
        modal = useSelector((state: RootState) => state.page.modal),
        dispatch = useDispatch(),
        ref = useRef(null),
        [modalOpen, setModalOpen] = useState(false);


  const { 
    register, 
    handleSubmit, 
    getValues,
    resetField,
    setError,
    formState: { errors } 
  } = useForm<Inputs>({defaultValues: {login: '', mail: '', password: ''}}),
  
  onSubmit: SubmitHandler<Inputs> = (data) => dispatch(registers(data));

  useEffect(() =>{

    (modal) && setModalOpen(true);

    if(error) {
      resetField('login');
      resetField('mail');
      resetField('password');
      resetField('passwordCopy');
      setError('login', {type: 'required', message: '' });
      setError('mail', {type: 'required', message: '' });
      setError('password', {type: 'required', message: '' });
      setError('passwordCopy', {type: 'required', message: '' });
    }

    // Вызов addEventListener для закрытия авторизации 
    // по клику за пределами формы
    const handleClick = (event: any) => {                         //////////////////////////////////////////////
      let target = event.target;

      (!target.closest('#register-form')) && dispatch(pageBasic());
    };

    const element: any = ref.current;                            ////////////////////////////////////////////////
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
  };
  /////////////////////////////////////////////
  }, [error, errors, setError, resetField, dispatch, modal])

  const modalClose = () => { /////////////////////////////////////////////
    
    setModalOpen(false);
    dispatch(pageBasic());
  }

  if(modalOpen) return(<ContainerModal onClick = {modalClose} />)
  else return(
    <main id = 'register' ref = {ref}>
      <Div divData = {divData}>
        <H2 h2Data = {h2Data} />
        <P pData = {pData} />
        <Button 
          buttonData={buttonData}
          onClick = {() => dispatch(pageLogin())}  
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type = 'text' 
                className = 'register-form__input'
                {...register('login', { 
                  required: true,
                  validate: value => !!value.trim(),
                  pattern: /^[A-Z]{3,15}$/i,
                })} 

                placeholder = 'Логин'
                autoComplete = 'off'
                style = {{borderColor: (errors.login) && '#EB5757'}}
          />
          <Icons icon = 'user' classes = 'register-form__svg' />
          {(errors.login) && <Icons icon = 'exclamation' classes = 'register-form__svg-error' />}
          <br />

            <input type = 'text'
                  className = 'register-form__input'  
                  {...register('mail', {
                    required: true,
                    validate: value => !!value.trim(),
                    pattern: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i,
                    maxLength: 30,
                  })} 
                  placeholder = 'Введите'
                  autoComplete = 'off'
                  style = {{borderColor: (errors.mail) && '#EB5757'}}
            />
            <Icons icon = 'mail' classes = 'register-form__svg' />
            {(errors.mail) && <Icons icon = 'exclamation' classes = 'register-form__svg-error' />}
            <br />

          <input type = 'password' 
                className = 'register-form__input'
                {...register('password', { 
                  required: true, 
                  pattern: /^[0-9A-Z!@#$%^&*]{5,20}$/i,
                  validate: value => !!value.trim(),
                })}
                placeholder = 'Пароль'
                autoComplete = 'new-password'
                style = {{borderColor: (errors.password) && '#EB5757'}}
          />
          <Icons icon = 'password' classes = 'register-form__svg' />
          {(errors.password) && <Icons icon = 'exclamation' classes = 'register-form__svg-error' />}
          <br />

          <input type = 'password' 
                className = 'register-form__input'
                {...register('passwordCopy', { 
                  required: true, 
                  validate: value => value === getValues('password')      
                })}
                placeholder = 'Повторите пароль'
                autoComplete = 'new-password'
                style = {{borderColor: (errors.passwordCopy) && '#EB5757'}}
          />
          <Icons icon = 'password' classes = 'register-form__svg' />
          {(errors.passwordCopy) && <Icons icon = 'exclamation' classes = 'register-form__svg-error' />}  
          <br />  
          <Img imgData = {imgData} />
          <br />
          {(errors.login || errors.mail || errors.password || errors.passwordCopy) && <><ContainerError /> <br/></>}
          <input type = 'submit' id = 'register-form__button' value = 'Зарегистрироваться'/>
        </form>
      </Div>
    </main>
  )
}

export default App;