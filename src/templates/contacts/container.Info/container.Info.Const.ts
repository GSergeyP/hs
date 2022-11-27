const h2Data = [
  {
    id: 'contacts-h2',
    title: 'Контакты',
  }
];

const pData = [
  {
    classes: 'contacts-p',
    title: 'Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.',
  },
  {
    classes: 'contacts-p other',
    title: 'Администрация сайта не владеет информацией о наличии свободных квартир',
    icons: {
      icon: 'exclamation',
      classes: 'contacts-p__svg',
      position: 'left',  
    }
  }
];

const listingDataUl = [
  {
    id: 'contacts-ul',
  }
],

listingDataLi = [
  {
    classes: 'contacts-li',
    title: '220068, РБ, г. Минск, ул. Осипенко, 21, кв.23',
    icons: {
      icon: 'sign',
      classes: 'contacts-li__svg',
      position: 'left',  
    }
  },
  {
    classes: 'contacts-li',
    title: '+375 29 621-48-33',
    icons: {
      icon: 'cellphone',
      classes: 'contacts-li__svg',
      position: 'left',  
    }
  },
  {
    classes: 'contacts-li',
    title: 'sdaem@sdaem.by',
    icons: {
      icon: 'mail',
      classes: 'contacts-li__svg',
      position: 'left',  
    }
  },
  {
    classes: 'contacts-li',
    title: 'Режим работы: 08:00-22:00',
    icons: {
      icon: 'clock',
      classes: 'contacts-li__svg',
      position: 'left',  
    }
  },
  {
    classes: 'contacts-li__other',
    title: 'ИП Шушкевич Андрей Викторович',
  },
  {
    classes: 'contacts-li__other',
    title: 'УНП 192602485 Минским горисполкомом 10.02.2016',
  }
];

const linksData = [
  {
    classes: 'contacts-a',
    url: 'noLink',
    icons: {
      icon: 'viber',
      classes: 'contacts-a__svg',
      position: 'left',  
    }
  },
  {
    classes: 'contacts-a',
    url: 'noLink',
    icons: {
      icon: 'telegram',
      classes: 'contacts-a__svg',
      position: 'left',  
    }
  },
  {
    classes: 'contacts-a',
    url: 'noLink',
    icons: {
      icon: 'whatsapp',
      classes: 'contacts-a__svg',
      position: 'left',  
    }
  } 
];
export { h2Data, pData, listingDataUl, listingDataLi, linksData }