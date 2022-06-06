import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  catalog: {
    id: `${name}.catalog`,
    defaultMessage: 'Каталог услуг',
  },
  specialists: {
    id: `${name}.specialists`,
    defaultMessage: 'Специалисты',
  },
  orders: {
    id: `${name}.orders`,
    defaultMessage: 'Заказы',
  },
  login: {
    id: `${name}.login`,
    defaultMessage: 'Войти',
  },
  logout: {
    id: `${name}.logout`,
    defaultMessage: 'Выйти',
  },
  portfolio: {
    id: `${name}.portfolio`,
    defaultMessage: 'Портфолио',
  },
  subscription: {
    id: `${name}.subscription`,
    defaultMessage: 'Подписка',
  },
  settings: {
    id: `${name}.settings`,
    defaultMessage: 'Настройки',
  },
  myProjects: {
    id: `${name}.my_projects`,
    defaultMessage: 'Мои проекты',
  },
  newMyProjects: {
    id: `${name}.new_my_projects`,
    defaultMessage: 'Создать проект',
  },
  myReplies: {
    id: `${name}.my_replies`,
    defaultMessage: 'Мои отклики',
  },
})
