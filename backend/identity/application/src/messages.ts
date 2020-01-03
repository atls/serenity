import { name } from '../package.json'

export default {
  notFound: {
    id: `${name}.not_found`,
    defaultMessage: 'Email не найден',
  },
  invalidPassword: {
    id: `${name}.invalid_password`,
    defaultMessage: 'Неверный пароль',
  },
  minLength: {
    id: `${name}.min_length`,
    defaultMessage: 'Минимально $constraint1 символа',
  },
  invalidEmail: {
    id: `${name}.invalid_email`,
    defaultMessage: 'Невалидный Email',
  },
  emailAlreadyExists: {
    id: `${name}.email_already_exists`,
    defaultMessage: 'Email уже существует',
  },
  emailNotExists: {
    id: `${name}.email_not_exists`,
    defaultMessage: 'Email не найден',
  },
  phoneAlreadyExists: {
    id: `${name}.phone_already_exists`,
    defaultMessage: 'Телефон не найден',
  },
  doNotMatch: {
    id: `${name}.do_not_match`,
    defaultMessage: 'Пароли не совпадают',
  },
  invalidPhone: {
    id: `${name}.invalid_phone`,
    defaultMessage: 'Невалидный номер',
  },
}
