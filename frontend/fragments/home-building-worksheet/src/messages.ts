import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  houseType: {
    id: `${name}.house_type`,
    defaultMessage: 'Тип дома:',
  },
  houseTypePlaceholder: {
    id: `${name}.house_type_placeholder`,
    defaultMessage: 'Выберите',
  },
  foundationType: {
    id: `${name}.foundation_type`,
    defaultMessage: 'Тип фундамента:',
  },
  foundationTypePlaceholder: {
    id: `${name}.foundation_type_placeholder`,
    defaultMessage: 'Выберите',
  },
  roofingType: {
    id: `${name}.roofing_type`,
    defaultMessage: 'Вид кровельного материала:',
  },
  roofingTypePlaceholder: {
    id: `${name}.roofing_type_placeholder`,
    defaultMessage: 'Выберите',
  },
  houseArea: {
    id: `${name}.house_area`,
    defaultMessage: 'Площадь дома',
  },
  houseAreaPlaceholder: {
    id: `${name}.house_area_placeholder`,
    defaultMessage: 'Введите',
  },
  squareMeter: {
    id: `${name}.square_meter`,
    defaultMessage: 'м2',
  },
  floorsNumber: {
    id: `${name}.floors_number`,
    defaultMessage: 'Кол-во этажей',
  },
  floorsNumberPlaceholder: {
    id: `${name}.floors_number_placeholder`,
    defaultMessage: 'Выберите',
  },
  projectStage: {
    id: `${name}.project_stage`,
    defaultMessage: 'На каком этапе находится проект?',
  },
  planning: {
    id: `${name}.planning`,
    defaultMessage: 'Планирование',
  },
  budgeting: {
    id: `${name}.budgeting`,
    defaultMessage: 'Составление бюджета',
  },
  executorSearching: {
    id: `${name}.executor_searching`,
    defaultMessage: 'Поиск исполнителя',
  },
  requireAdditionally: {
    id: `${name}.require_additionally`,
    defaultMessage: 'Дополнительно потребуется:',
  },
  purchaseMaterials: {
    id: `${name}.purchase_materials`,
    defaultMessage: 'Закупка материалов',
  },
  unloadingAndLifting: {
    id: `${name}.unloading_and_lifting`,
    defaultMessage: 'Разгрузка и подъем материалов',
  },
  dismantling: {
    id: `${name}.dismantling`,
    defaultMessage: 'Демонтаж',
  },
  garbageRemoval: {
    id: `${name}.garbage_removal`,
    defaultMessage: 'Вывоз мусора',
  },
  cleaning: {
    id: `${name}.cleaning`,
    defaultMessage: 'Уборка после ремонта',
  },
})
