import { useContext, useEffect } from 'react';
import { Context } from '../context/context.Create';
import { useForm, SubmitHandler } from 'react-hook-form';
import Icons from '../../../../components/icons';
import ContainerError from '../container.Error/container.Error';
import './container.Form.scss';

interface Inputs  {
  name: string,
  mail: string,
  msg: string,
};

const ContainerForm = () => {
  const { context, setContext } = useContext(Context);
  const { 
    register, 
    handleSubmit,
    resetField, 
    formState: { errors } 
  } = useForm<Inputs>({
    defaultValues: {name: '', 
                    mail: '', 
                    msg: ''}
  }),
  onSubmit: SubmitHandler<Inputs> = () => setContext(true);  
 
  useEffect(() => {
    (context) && resetField('name');
    (context) && resetField('mail');
    (context) && resetField('msg');
  }, [context, resetField])

  return(
    <article>
      <form id = 'contacts-form' onSubmit={handleSubmit(onSubmit)}>
        <label className = 'contacts-form__label name'>Ваше имя
          <input type = 'text'
            className = 'contacts-form__input name'  
              {...register('name', {
                required: true,
                validate: value => !!value.trim(),
                pattern: /^[A-ZА-ЯЁ]{3,17}$/i,
              })} 
              placeholder = 'Введите'
              autoComplete = 'off'
              style = {{borderColor: (errors.name) && '#EB5757'}}
          />
          <Icons icon = 'user' classes = 'contacts-form__svg name' />
          {(errors.name) && <Icons icon = 'exclamation' classes = 'contacts-form__svg-error name' />}
        </label>

        <label className = 'contacts-form__label mail'>Ваша электронная почта
          <input type = 'text'
                className = 'contacts-form__input mail'  
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
          <Icons icon = 'mail' classes = 'contacts-form__svg mail' />
          {(errors.mail) && <Icons icon = 'exclamation' classes = 'contacts-form__svg-error mail' />}
        </label>

        <label className = 'contacts-form__label msg'>Ваше сообщение
          <textarea className = 'contacts-form__textarea msg'
            {...register('msg', {
              required: true,
              validate: value => !!value.trim(),
              maxLength: 1000,
            })}
            placeholder = 'Сообщение'
            autoComplete = 'off'
            style = {{borderColor: (errors.msg) && '#EB5757'}}
          />
        </label>
        {(errors.name || errors.mail || errors.msg) && <ContainerError />}

        <input type = 'submit' className = 'contacts-form__button' value = 'Отправить'/>

      </form>
    </article>
  )
}

export default ContainerForm;