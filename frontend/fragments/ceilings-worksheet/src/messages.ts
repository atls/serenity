import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  ceilingType: {
    id: `${name}.ceiling_type`,
    defaultMessage: 'Тип потолка?',
  },
  ceilingTypePlaceholder: {
    id: `${name}.ceiling_type_placeholder`,
    defaultMessage: 'Выберите',
  },
  stretch: {
    id: `${name}.stretch`,
    defaultMessage: 'Натяжной потолок',
  },
  stretchFabric: {
    id: `${name}.stretch_fabric`,
    defaultMessage: 'Тканевые',
  },
  stretchCoatingPVC: {
    id: `${name}.stretch_coating_PVC`,
    defaultMessage: 'ПВХ покрытие',
  },
  size: {
    id: `${name}.size`,
    defaultMessage: 'Размер потолка?',
  },
  length: {
    id: `${name}.length`,
    defaultMessage: 'Длина',
  },
  width: {
    id: `${name}.width`,
    defaultMessage: 'Ширина',
  },
  sizeMeter: {
    id: `${name}.size_meter`,
    defaultMessage: 'м',
  },
  mounting: {
    id: `${name}.mounting`,
    defaultMessage: 'Монтаж потолка?',
  },
  heatingAndOtherPipes: {
    id: `${name}.heating_and_other_pipes`,
    defaultMessage: 'Есть стояки отопления и другие трубы',
  },
  installCornices: {
    id: `${name}.install_cornices`,
    defaultMessage: 'Необходима установка потолочных карнизов',
  },
  builtinWardrobe: {
    id: `${name}.builtin_wardrobe`,
    defaultMessage: 'Имеется встроенный шкаф-купе под потолок',
  },
  complexCeiling: {
    id: `${name}.complex_ceiling`,
    defaultMessage: 'Потолок сложной формы',
  },
  more3Meters: {
    id: `${name}.more_3_meters`,
    defaultMessage: 'Высота потолка больше 3 метров',
  },
  installEngineeringSystems: {
    id: `${name}.install_engineering_systems`,
    defaultMessage: 'Монтаж инженерных систем?',
  },
  electricalWiring: {
    id: `${name}.electrical_wiring`,
    defaultMessage: 'Монтаж электропроводки',
  },
  spotlights: {
    id: `${name}.spotlights`,
    defaultMessage: 'Установка точечных светильников',
  },
  pendantChandelier: {
    id: `${name}.pendant_chandelier`,
    defaultMessage: 'Установка подвесной люстры',
  },
  ceilingChandelier: {
    id: `${name}.ceiling_chandelier`,
    defaultMessage: 'Установка потолочной люстры',
  },
  ventilationGrilles: {
    id: `${name}.ventilation_grilles`,
    defaultMessage: 'Установка вентиляционных решеток',
  },
  alarmSensors: {
    id: `${name}.alarm_sensors`,
    defaultMessage: 'Установка датчиков сигнализации',
  },
  installationRoom: {
    id: `${name}.installation_room`,
    defaultMessage: 'В каком помещении требуется установка?',
  },
  bathroom: {
    id: `${name}.bathroom`,
    defaultMessage: 'Ванная',
  },
  garage: {
    id: `${name}.garage`,
    defaultMessage: 'Гараж',
  },
  livingRoom: {
    id: `${name}.living_room`,
    defaultMessage: 'Гостиная',
  },
  cabinet: {
    id: `${name}.cabinet`,
    defaultMessage: 'Кабинет',
  },
  kitchen: {
    id: `${name}.kitchen`,
    defaultMessage: 'Кухня',
  },
  basement: {
    id: `${name}.basement`,
    defaultMessage: 'Подвал',
  },
  laundry: {
    id: `${name}.laundry`,
    defaultMessage: 'Прачечная',
  },
  hallway: {
    id: `${name}.hallway`,
    defaultMessage: 'Прихожая',
  },
  bedroom: {
    id: `${name}.bedroom`,
    defaultMessage: 'Спальня',
  },
  diningRoom: {
    id: `${name}.dining_room`,
    defaultMessage: 'Столовая',
  },
  terrace: {
    id: `${name}.terrace`,
    defaultMessage: 'Терраса',
  },
  restroom: {
    id: `${name}.restroom`,
    defaultMessage: 'Туалет',
  },
  installationRoomAnother: {
    id: `${name}.installation_room_another`,
    defaultMessage: 'Другое',
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
