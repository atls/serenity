import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  profileSettings: {
    id: `${name}.profile_settings`,
    defaultMessage: 'Редактирование профиля',
  },
  enterNewEmail: {
    id: `${name}.enter_new_email`,
    defaultMessage: 'Введите новую почту',
  },
  confirmPassword: {
    id: `${name}.confirm_password`,
    defaultMessage: 'Подтвердите пароль',
  },
  save: {
    id: `${name}.save`,
    defaultMessage: 'Сохранить',
  },
})
