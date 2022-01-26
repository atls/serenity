import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  welcome: {
    id: `${name}.welcome`,
    defaultMessage: 'Добро пожаловать на {site}!',
  },
  subject: {
    id: `${name}.subject`,
    defaultMessage: 'Подтверждение Email адреса',
  },
  activateDescription: {
    id: `${name}.activate_description`,
    defaultMessage:
      'Чтобы начать пользоваться сервисом, активируйте свой аккаунт, нажав на кнопку ниже:',
  },
  activate: {
    id: `${name}.activate`,
    defaultMessage: 'Активировать аккаунт',
  },
  ignore: {
    id: `${name}.ignore`,
    defaultMessage: 'Если вы не создали эту учетную запись, просто проигнорируйте это сообщение.',
  },
  webVersion: {
    id: `${name}.web_version`,
    defaultMessage: 'Web-версия',
  },
})
