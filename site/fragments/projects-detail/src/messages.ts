import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  info: {
    id: `${name}.info`,
    defaultMessage: 'Информация о проекте:',
  },
  beginningOfWork: {
    id: `${name}.beginning_of_work`,
    defaultMessage: 'Когда приступить к работе?',
  },
  beginningOfWorkSoon: {
    id: `${name}.beginning_of_work_soon`,
    defaultMessage: 'Скоро',
  },
  address: {
    id: `${name}.address`,
    defaultMessage: 'Адрес объекта',
  },
  completeProjects: {
    id: `${name}.complete_projects`,
    defaultMessage: 'Завершенных проектов',
  },
  openProjects: {
    id: `${name}.open_projects`,
    defaultMessage: 'Открытых проектов',
  },
  activity: {
    id: `${name}.activity`,
    defaultMessage: 'Активность',
  },
})
