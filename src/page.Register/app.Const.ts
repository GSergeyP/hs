const h2Data = [
  {
    id: 'register-form__h2', 
    title: 'Регистрация',
  }
];

const pData = [
  {
    classes: 'register-form__p head', 
    title: 'Пользователь обязуется:',
  },
  {
    classes: 'register-form__p top', 
    title: 'предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта; ',
    icons: {
      icon: 'point',
      classes: 'register-form__p-svg',
      position: 'left',
    }
  },
  {
    classes: 'register-form__p top', 
    title: 'добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.',
    icons: {
      icon: 'point',
      classes: 'register-form__p-svg',
      position: 'left',
    }
  },
  {
    classes: 'register-form__p bottom', 
    title: 'Уже есть аккаунт?',
  }
];

const imgData = [
  {
    id: 'register-form__img',
    src: require('./../common/img/general/recaptcha.png'),
    alt: 'SDAEM.BY'
  }
];

const divData = [
  {
    id: 'register-form',
  }
];

const buttonData = [
  {
    classes: 'register-form__button', 
    title: 'Войдите',
  }
]

export { h2Data, pData, imgData, divData, buttonData };

   
   