// API
export const API_BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

// URLs
export const HOME_URL = '/';
export const LOGIN_URL = '/login';
export const SEARCH_URL = '/search';
export const SEARCH_RESULT_URL = '/search/result';

// Content
export const CONTACTS = {
  address: 'г. Москва, Цветной б-р, 40',
  phone: {
    text: '+7 (495) 771-21-11',
    link: 'tel:+74957712111',
  },
  email: {
    text: 'info@scan.ru',
    link: 'mailto:info@scan.ru',
  },
};

export const COPYRIGHT = 'Сделано с любовью ❤️ 2023';

export const MENU = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Тарифы',
    link: '#',
  },
  {
    title: 'FAQ',
    link: '#',
  },
];

export const TARIFFS = [
  {
    id: 'beginner',
    name: 'Beginner',
    description: 'Для небольшого исследования',
    readMoreLink: '#',
    price: 799,
    oldPrice: 1200,
    credit: 'или 150 ₽/мес. при рассрочке на 24 мес.',
    includes: [
      'Безлимитная история запросов',
      'Безопасная сделка',
      'Поддержка 24/7',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Для HR и фрилансеров',
    readMoreLink: '#',
    price: 1299,
    oldPrice: 2600,
    credit: 'или 279 ₽/мес. при рассрочке на 24 мес.',
    includes: [
      'Все пункты тарифа Beginner',
      'Экспорт истории',
      'Рекомендации по приоритетам',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Для корпоративных клиентов',
    readMoreLink: '#',
    price: 2379,
    oldPrice: 3700,
    includes: [
      'Все пункты тарифа Pro',
      'Безлимитное количество запросов',
      'Приоритетная поддержка',
    ],
  },
];

export const MAIN_SLIDES = [
  {
    id: 1,
    iconName: 'stopwatch',
    text: 'Высокая и оперативная скорость обработки заявки',
  },
  {
    id: 2,
    iconName: 'magnifier',
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
  },
  {
    id: 3,
    iconName: 'shield',
    text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
  },
  {
    id: 4,
    iconName: 'magnifier',
    text: 'Лучший продукт на рынке по мнению бабы Клавы',
  },
];
