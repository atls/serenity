import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  passwordRecovery: {
    id: `${name}.password_recovery`,
    defaultMessage: 'Восстановление пароля',
  },
  enterPassword: {
    id: `${name}.enter_password`,
    defaultMessage: 'Введите пароль',
  },
  confirmPassword: {
    id: `${name}.confirm_password`,
    defaultMessage: 'Подтвердите пароль',
  },
  changePassword: {
    id: `${name}.change_password`,
    defaultMessage: 'Изменить пароль',
  },
})
