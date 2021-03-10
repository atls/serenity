import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  orders: {
    id: `${name}.orders`,
    defaultMessage: 'Заказы',
  },
  search: {
    id: `${name}.search`,
    defaultMessage: 'Поиск заказов',
  },
})
