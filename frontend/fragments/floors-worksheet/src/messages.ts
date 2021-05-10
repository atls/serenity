import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  floorArea: {
    id: `${name}.floor_area`,
    defaultMessage: 'Площадь пола?',
  },
  enterArea: {
    id: `${name}.enter_area`,
    defaultMessage: 'Введите',
  },
  squareMeter: {
    id: `${name}.square_meter`,
    defaultMessage: 'м2',
  },
  typeOfFlooring: {
    id: `${name}.type_of_flooring`,
    defaultMessage: 'Тип напольного покрытия?',
  },
  linoleum: {
    id: `${name}.linoleum`,
    defaultMessage: 'Линолеум',
  },
  laminate: {
    id: `${name}.laminate`,
    defaultMessage: 'Ламинат',
  },
  parquet: {
    id: `${name}.parquet`,
    defaultMessage: 'Паркет',
  },
  carpet: {
    id: `${name}.carpet`,
    defaultMessage: 'Ковролин',
  },
  batten: {
    id: `${name}.batten`,
    defaultMessage: 'Половая доска',
  },
  ceramicTile: {
    id: `${name}.ceramic_tile`,
    defaultMessage: 'Керамическая плитка',
  },
  cork: {
    id: `${name}.cork`,
    defaultMessage: 'Пробковое покрытие',
  },
  marmoleum: {
    id: `${name}.marmoleum`,
    defaultMessage: 'Мармолеум',
  },
  polymerFloor: {
    id: `${name}.polymer_floor`,
    defaultMessage: 'Полимерный пол',
  },
  anotherTypeOfFlooring: {
    id: `${name}.another_type_of_flooring`,
    defaultMessage: 'Другое',
  },
  foundationPreparation: {
    id: `${name}.foundation_preparation`,
    defaultMessage: 'Подготовка основания:',
  },
  floorScreed: {
    id: `${name}.floor_screed`,
    defaultMessage: 'Подготовить стяжку пола',
  },
  concreteFloor: {
    id: `${name}.concrete_floor`,
    defaultMessage: 'Подготовить бетонный пол',
  },
  woodenFloor: {
    id: `${name}.wooden_floor`,
    defaultMessage: 'Подготовить деревянный пол',
  },
  notRequired: {
    id: `${name}.not_required`,
    defaultMessage: 'Не требуется',
  },
  anotherPreparation: {
    id: `${name}.another_preparation`,
    defaultMessage: 'Другое',
  },
  additionalWork: {
    id: `${name}.additional_work`,
    defaultMessage: 'Дополнительные работы:',
  },
  dismantlingFloor: {
    id: `${name}.dismantling_floor`,
    defaultMessage: 'Демонтаж напольного покрытия',
  },
  installSkirtingBoards: {
    id: `${name}.install_skirting_boards`,
    defaultMessage: 'Монтаж напольных плинтусов',
  },
  installDoorSill: {
    id: `${name}.install_door_sill`,
    defaultMessage: 'Монтаж дверных порогов',
  },
})
