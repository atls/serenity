import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  specialists: {
    id: `${name}.specialists`,
    defaultMessage: 'Специалисты',
  },
  contact: {
    id: `${name}.contact`,
    defaultMessage: 'Связаться',
  },
  search: {
    id: `${name}.search`,
    defaultMessage: 'Поиск специалиста',
  },
})
