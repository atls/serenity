import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  selected: {
    id: `${name}.selected`,
    defaultMessage: 'Исполнитель выбран',
  },
  notSelected: {
    id: `${name}.not_selected`,
    defaultMessage: 'Исполнитель не выбран',
  },
  notYouSelected: {
    id: `${name}.not_you_selected`,
    defaultMessage: 'Заказчик выбрал другого исполнителя',
  },
  replyCount: {
    id: `${name}.reply_count`,
    defaultMessage: `{сount, plural,
      one { отклик}
      few { отклика}
      many { откликов}
      other { откликов}
    }`,
  },
  views: {
    id: `${name}.views`,
    defaultMessage: `{сount, plural,
      one { просмотр}
      few { просмотра}
      many { просмотров}
      other { просмотров}
    }`,
  },
  draft: {
    id: `${name}.draft`,
    defaultMessage: 'Черновик',
  },
  published: {
    id: `${name}.published`,
    defaultMessage: 'Открытый',
  },
  performed: {
    id: `${name}.performed`,
    defaultMessage: 'В работе',
  },
  completed: {
    id: `${name}.completed`,
    defaultMessage: 'Завершенный',
  },
})
