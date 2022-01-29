import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  subject: {
    id: `${name}.subject`,
    defaultMessage: 'Сброс пароля',
  },
  resetPassword: {
    id: `${name}.reset_password`,
    defaultMessage: 'Сброс пароля на {site}',
  },
  description: {
    id: `${name}.description`,
    defaultMessage: 'Мы получили запрос на восстановление пароля к Вашему аккаунту на {site}',
  },
  press: {
    id: `${name}.press`,
    defaultMessage: 'Для смены пароля нажмите кнопку ниже:',
  },
  changePassword: {
    id: `${name}.change_password`,
    defaultMessage: 'Сменить пароль',
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
