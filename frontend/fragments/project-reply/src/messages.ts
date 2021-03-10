import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  yourResponse: {
    id: `${name}.your_response`,
    defaultMessage: 'Ваш отклик',
  },
  response: {
    id: `${name}.response`,
    defaultMessage: 'Отклик',
  },
  responses: {
    id: `${name}.responses`,
    defaultMessage: 'Отклики',
  },
  messagePlaceholder: {
    id: `${name}.message_placeholder`,
    defaultMessage: 'Введите ваше сообщение',
  },
  respondButton: {
    id: `${name}.respond_button`,
    defaultMessage: 'Откликнуться',
  },
  registration: {
    id: `${name}.registration`,
    defaultMessage:
      'Чтобы откликнуться на этот проект, вам необходимо зарегистрироваться на сервисе как исполнитель. Вы можете сделать это прямо сейчас:',
  },
  registrationButton: {
    id: `${name}.registration_button`,
    defaultMessage: 'Зарегистрировать аккаунт',
  },
  loginButton: {
    id: `${name}.login_button`,
    defaultMessage: 'Войти',
  },
  commentPlaceholder: {
    id: `${name}.comment_placeholder`,
    defaultMessage: 'Написать сообщение',
  },
  allResponsesSidebar: {
    id: `${name}.all_responses_sidebar`,
    defaultMessage: 'Все отклики',
  },
  newResponsesSidebar: {
    id: `${name}.new_responses_sidebar`,
    defaultMessage: 'Новые',
  },
  candidatesSidebar: {
    id: `${name}.candidates_sidebar`,
    defaultMessage: 'Кандидаты',
  },
  deniedSidebar: {
    id: `${name}.denied_sidebar`,
    defaultMessage: 'Отказано',
  },
  newRequest: {
    id: `${name}.new_request`,
    defaultMessage: 'Новая заявка',
  },
  choose: {
    id: `${name}.choose`,
    defaultMessage: 'Принять',
  },
  deny: {
    id: `${name}.deny`,
    defaultMessage: 'Отказать',
  },
  chosen: {
    id: `${name}.chosen`,
    defaultMessage: 'Принят',
  },
  denied: {
    id: `${name}.denied`,
    defaultMessage: 'Отказано',
  },
  candidate: {
    id: `${name}.candidate`,
    defaultMessage: 'Кандидат',
  },
  projectOffer: {
    id: `${name}.project_offer`,
    defaultMessage:
      ' предлагает вам персональный проект. Ознакомьтесь с условиями и подтвердите свои намерения участвовать в этом проекте.',
  },
  projectReject: {
    id: `${name}.project_reject`,
    defaultMessage: 'Отказаться',
  },
  projectAccept: {
    id: `${name}.project_accept`,
    defaultMessage: 'Начать сотрудничество',
  },
})
