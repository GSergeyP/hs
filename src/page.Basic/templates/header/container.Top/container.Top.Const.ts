const linksData = [
  {
    classes: 'header-top__left',
    title: 'Главная',
    url: '',
  },
  {
    classes: 'header-top__left',
    title: 'Новости',
    url: 'newsgroup',
  },
  {
    classes: 'header-top__left',
    title: 'Размещение и тарифы',
    url: 'noLink',
  },
  {
    classes: 'header-top__left',
    title: ' Объявления на карте',
    url: 'noLink',
    icons: {
      icon: 'sign',
      id: 'header-top__left-svg',
      position: 'left',
    }
  },
  {
    classes: 'header-top__left',
    title: 'Контакты',
    url: 'contacts',
  },
  {
    classes: 'header-top__right',
    title: 'Закладки',
    url: 'noLink',
    icons: {
      icon: 'heart',
      id: 'header-top__right-svg',
      position: 'right',
    }
  }
];

const buttonDataOpen = [
  {
    classes: 'header-top__right open',
    title: 'Вход и регистрация',
  }
];

const buttonDataClose = [
  {
    classes: 'header-top__right close',
    icons:{
      icon: 'mark', 
      id: 'header-top__svg',
      position: 'right',
    }
  }
];

export { linksData, buttonDataOpen, buttonDataClose };
