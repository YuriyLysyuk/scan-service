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
