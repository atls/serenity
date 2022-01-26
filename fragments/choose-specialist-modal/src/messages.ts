import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  selection: {
    id: `${name}.selection`,
    defaultMessage: 'Выбор исполнителя',
  },
  selectionDescription: {
    id: `${name}.selection_description`,
    defaultMessage:
      'Нажимая кнопку «Назначить исполнителем» вы подтверждаете свое согласие на сотрудничество с Викторией. По итогу работы можно будет оставить свой отзыв.',
  },
  cancel: {
    id: `${name}.cancel`,
    defaultMessage: 'Отмена',
  },
  assign: {
    id: `${name}.assign`,
    defaultMessage: 'Назначить исполнителем',
  },
})
