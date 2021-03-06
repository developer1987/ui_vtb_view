/* eslint-disable max-len */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cityNames from 'faker/lib/locales/ru/address/city_name.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import femaleLastNames from 'faker/lib/locales/ru/name/female_last_name.js';
const maleFirstNames = require('faker/lib/locales/ru/name/male_first_name.js');
const maleLastNames = require('faker/lib/locales/ru/name/male_last_name.js');
const maleMiddleNames = require('faker/lib/locales/ru/name/male_middle_name.js');

import {v4 as uuidv4} from 'uuid';
const faker = require('faker');
faker.locale = 'ru';

import {IApplication, IAppTransition, IAppAttributes} from '../data-layer/application/types';
const stateAll = [
  'Жесткий отказ',
  'На принятии решения РМ',
  'Верификация ОД',
  'Одобрено',
  'Кредит выдан',
];

const stateSysName = [
  'approveRM',
  'stateHardCancel',
  'stateVerificationOD',
  'stateDealApproved',
  'stateCreditIssue',
];

const stateMap: {[key: string]: string; } = {
  'approveRM': 'На принятии решения РМ',
  'stateHardCancel': 'Жесткий отказ',
  'stateVerificationOD': 'Верификация ОД',
  'stateDealApproved': 'Одобрено',
  'stateCreditIssue': 'Кредит выдан'
};

// Сервис обработки
const processingServiceAll = [
  'МС Заявка',
  'МС Сделка',
  'МС РКК'
];
// Подразделение-инициатор
const depInitial = [
  'Авторум',
  'Диалог 26',
  'Кардан 77',
];
// Канал продаж
const salesChannel = [
  'УРМ-АВТО',
  'Интернет',
  'Агентские продажи',
  'ВТБ24-онлайн',
  'Персональный менеджер',
  'Интернет-партнеры',
  'Автосалоны-партнеры',
  'ДКО',
  'МАК'
];
// Канал продаж второй уровень
const salesSecondChannel = [
  'АВТОГРАД',
  'Автоломбард',
  'VW-Group',
  'УРМ Восток Моторс',
  'Bares Motors Group'
];
// Тип обязательтва
const typeGuarantyList = [
  'Автокредит',
  'Рефинансирование',
  'Беззалоговое кредитование'
];
// Продукт
const productList = [
  'Кредит на доп. оборудование и услуги',
  'Беззалоговый кредит',
  'АвтоЛайт',
  'АвтоСтандарт',
  'Предодобренный автокредит'
];
// Программа
const programmList = [
  'Suzuki Direct',
  'АВТОГАЗ В КРЕДИТ',
  'Кредит на подержанные ТС-ФЛ',
  'АвтоСтандарт'
];
// Автосалон
const carShowroomList = [
  'Век А_ВЕК',
  'Автосистема А_АВТОСИСТЕМА_77',
  'Citroen А_CITROEN',
  'ООО "Авто-Сфера" А_АВТО-СФЕРА'
];
// Вид т/с
const kindCarList = [
  'Легковой автомобиль',
  'Коммерческий транспорт',
  'Мотоцикл'
];
// Тип т/с
const typeCarList = [
  'Поддержанный',
  'Новый'
];
// Марка
const markCarList = [
  'SUZUKI',
  'HONDA',
  'AUDI',
];
// Модель
const modelCarList = [
  'ASX',
  'A4',
  'TSX',
];
// Результат этапа
const stateResultList = [
  'Выполнено',
  'Отклонить',
  'Ошибка'
];
// Комментарий к этапу
const commentList = [
  'Текст, который содержит примечания от пользователя при прохождении этапа',
  ''
];

function getRandom(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(coll: any[]): string {
  return coll[getRandom(0, coll.length - 1)];
}

function generateArray<T>(length: number, generator: () => T): T[] {
  return new Array(length).fill(0).map(generator);
}

function generateNumberString(length: number) {
  return generateArray(length, () => getRandom(1, 9)).join('');
}

export function generateAddress() {
  return `${generateNumberString(6)}, г. ${getRandomElement(
      cityNames
  )}, ул. ${getRandomElement(femaleLastNames)}, ${getRandom(1, 200)}`;
}

export function generateFIO() {
  return `${getRandomElement(maleLastNames)} ${getRandomElement(maleFirstNames)} ${getRandomElement(maleMiddleNames)}`;
}

export function generateDate() {
  const now = new Date();
  return new Date(now.getUTCFullYear(), getRandom(0, now.getUTCMonth()), getRandom(0, 27), getRandom(0, 24), getRandom(0, 59), getRandom(0, 59));
}

export function generateBirthDate() {
  return new Date(getRandom(1965, 2000), getRandom(0, 11), getRandom(0, 27), 3);
}

export function generateApplicationEntry(): IApplication {
  const date = generateDate();
  const birthDay = generateBirthDate();
  const stateSysNameCurrent = getRandomElement(stateSysName);
  return {
    uuid: uuidv4(),
    id: generateNumberString(8),
    number: generateNumberString(8),
    creationDate: date.getTime(),
    creationDateStr: date.toLocaleDateString(),
    clientFIO: generateFIO(),
    clientBirthday: birthDay.getTime(),
    clientBirthdayStr: birthDay.toLocaleDateString(),
    processingService: getRandomElement(processingServiceAll),
    stateSysName: stateSysNameCurrent,
    stateName: stateMap[stateSysNameCurrent],
    employeeFIO: generateFIO(),
    appTransition: generateArray(getRandom(7, 10), () => generateHistoryDetails()),
    appAttributes: generateAppAttributes()
  };
}

function formatDate(date:Date) {
  let dd:any = date.getDate();
  if (dd < 10) dd = '0' + dd;
  let mm:any = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  let yy:any = date.getFullYear();
  if (yy < 10) yy = '0' + yy;
  let HH:any = date.getHours()*1;
  if (HH < 10) HH = '0' + HH;
  let MM:any = date.getMinutes()*1;
  if (MM < 10) MM = '0' + MM;
  let SS:any = date.getSeconds()*1;
  if (SS < 10) SS = '0' + SS;
  return dd + '.' + mm + '.' + yy + ' ' + HH + ':' + MM + ':' + SS;
}

export function generateHistoryDetails(): IAppTransition {
  const date = generateDate();
  return {
    stateName: getRandomElement(stateAll),
    stateDate: formatDate(date),
    stateResult: getRandomElement(stateResultList),
    userCRMID: generateNumberString(9),
    userFullName: generateFIO(),
    comment: getRandomElement(commentList),
  };
}

export function generateAppAttributes(): IAppAttributes {
  return {
    depInitial: getRandomElement(depInitial),
    city: getRandomElement(cityNames),
    salesChannel: getRandomElement(salesChannel),
    salesSecondChannel: getRandomElement(salesSecondChannel),
    typeGuaranty: getRandomElement(typeGuarantyList),
    product: getRandomElement(productList),
    programm: getRandomElement(programmList),
    cityBuyCar: getRandomElement(cityNames),
    carShowroom: getRandomElement(carShowroomList),
    kindCar: getRandomElement(kindCarList),
    typeCar: getRandomElement(typeCarList),
    markCar: getRandomElement(markCarList),
    modelCar: getRandomElement(modelCarList),
    clientGender: 'Мужской',
    clientYear: '33',
    clientPlaceBirthday: getRandomElement(cityNames),
    snils: '256-777-466 33',
    citizenship: 'РОССИЯ',
    isResident: 'Да',
    isSalaryClient: 'Нет',
    passportRF: 'Серия 76 52 № 984332, выдан 01.01.2019 УФМС России по Ярославской области код подразделения 150-172',
    passportForeign: 'Серия 43 23 № 122349, выдан 11.11.2020 ОУФМС код подразделения 760-123',
    factRegistrationAddress: generateAddress(),
    permanentRegistrationAddress: generateAddress(),
    clientMobilePhone: '+7(909)285-56-33',
    clientPhoneOther: '+7(979)131-80-48'
  };
}
