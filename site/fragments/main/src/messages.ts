import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  collected: {
    id: `${name}.collected`,
    defaultMessage: 'Мы собрали лучших мастеров в одном месте',
  },
  looking: {
    id: `${name}.looking`,
    defaultMessage: 'Что или кого вы ищете?',
  },
})
