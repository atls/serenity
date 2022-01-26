import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  title: {
    id: `${name}.title`,
    defaultMessage: 'Диалоги',
  },
  inputPlaceholder: {
    id: `${name}.inputPlaceholder`,
    defaultMessage: 'Напишите сообщение…',
  },
})
