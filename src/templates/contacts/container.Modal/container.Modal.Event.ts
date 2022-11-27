const containerModalEvent = (props: any ) => { ///////////////////////////////////////////
  let user = (props[0].user).trim(),
      mail = (props[0].mail).trim(),
      msg = (props[0].msg).trim();
  
  const regexUser = /^[A-ZА-ЯЁ]+$/i,
        regexMail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i;

  if(!user) user = 'error'
  else if(regexUser.test(user) === false) user = 'error'
  else if(user.length < 3) user = 'error';

  if(!mail) mail = 'error'
  else if(regexMail.test(mail) === false) mail = 'error';

  if(!msg) msg = 'error';

  const data: any = [{user: user, mail: mail, msg: msg}];
  return data;
}

export { containerModalEvent };