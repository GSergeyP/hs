import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/context.Create';
import Form from '../../../components/form';
import Label from '../../../components/label';
import Span from '../../../components/span';
import Icons from '../../../components/icons';
import InputText from '../../../components/input.Text';
import Textarea from '../../../components/textarea';
import Button from '../../../components/button';
import ContainerModalError from '../container.Modal/container.Modal.Error';
import { containerModalEvent } from '../container.Modal/container.Modal.Event';
import './container.Form.scss';

const ContainerForm = () => {
  const { context, setContext } = useContext(Context),
        [user, setUser] = useState<string>(''),
        [mail, setMail] = useState<string>(''),
        [msg, setMsg] = useState<string>(''),
        [userErr, setUserErr] = useState(false),
        [mailErr, setMailErr] = useState(false),
        [msgErr, setMsgErr] = useState(false);

  useEffect(() => {
    if(context[0].user === 'error') {
      setUserErr(true);
      setUser('')
    }
    else {
      setUser(context[0].user);
      setUserErr(false);
    }

    if(context[0].mail === 'error') {
      setMailErr(true);
      setMail('')
    }
    else {
      setMail(context[0].mail);
      setMailErr(false);
    }

    if(context[0].msg === 'error') {
      setMsgErr(true);
      setMsg('')
    }
    else {
      setMsg(context[0].msg);
      setMsgErr(false);
    }
  },[context]);

  const formDataGetting = (e: { preventDefault: () => void; }) => {
    
    e.preventDefault();

    const data: any = [{user: user, mail: mail, msg: msg}];
    const dataCurrent = containerModalEvent(data);

    setContext(dataCurrent);
  }

  return(
    <article>
      <Form formData = {[{id: 'contacts-form'}]}>
        <Label labelData = {[{classes: 'contacts-form__label-user', title: 'Ваше имя'}]}>
          <Span spanData = {[{classes: `contacts-form__span span-user ${(userErr) ? 'error' : ''}`}]}>
            <InputText 
              inputTextData = {[{classes: 'contacts-form__input input-user', placeholder: 'Введите'}]} 
              onChange = {(e: any) => setUser(e.target.value) } ////////////////////////////////////
              value = {user}
            />
            <Icons icon = 'user' classes = 'contacts-form__svg svg-user' />
            {
              (userErr) && <Icons icon = 'exclamation' classes = 'contacts-form__svg-error' />
            }
          </Span>
        </Label>
        <Label labelData = {[{classes: 'contacts-form__label-mail', title: 'Ваша электронная почта'}]}>
          <Span spanData = {[{classes: `contacts-form__span span-mail ${(mailErr) ? 'error' : ''}`}]}>
            <InputText 
              inputTextData = {[{classes: 'contacts-form__input input-mail', placeholder: 'Введите'}]}
              onChange = {(e: any) => setMail(e.target.value)} ////////////////////////////////////
              value = {mail}
            />
            <Icons icon = 'mail' classes = 'contacts-form__svg svg-mail' />
            {
              (mailErr) && <Icons icon = 'exclamation' classes = 'contacts-form__svg-error' />
            }
          </Span>
        </Label>
        <Label labelData = {[{id: 'contacts-form__label-textarea', title: 'Ваше сообщение'}]}>
          <Textarea 
            textareaData = {[{classes: `contacts-form__textarea ${(msgErr) ? 'error' : ''}`, 
            placeholder: 'Сообщение', 
            value: msg}]} 
            onChange = {(e: any) => setMsg(e.target.value)} //////////////////////////////////// 
          />
        </Label>
        <Span spanData = {[{
          classes: `contacts-form__button ${(userErr || mailErr || msgErr) ? 'error' : ''}`}]}>
          {
            (userErr || mailErr || msgErr) && <ContainerModalError />
          }
          <Button 
            buttonData = {[{id: 'contacts-form__button', title: 'Отправить'}]} 
            handleClick = {formDataGetting}
          />
        </Span>
      </Form>
    </article>
  )
}

export default ContainerForm;