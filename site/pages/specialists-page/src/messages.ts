import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  title: {
    id: `${name}.title`,
    defaultMessage: 'Serenity',
  },

  description: {
    id: `${name}.description`,
    defaultMessage: 'Мы собрали лучших мастеров в одном месте',
  },
  filterTitle: {
    id: `${name}.filter_title`,
    defaultMessage: 'Разделы',
  },
})
