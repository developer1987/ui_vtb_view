type IntervalDateFilter = 'intervalDateAll' |
  'intervalDateToday' | 'intervalDateWeek' | 'intervalDateMonth';

export const IntervalDateFilterMap:
  { [K in IntervalDateFilter]: string } = {
    intervalDateAll: 'Все',
    intervalDateToday: 'Сегодня',
    intervalDateWeek: 'Неделя',
    intervalDateMonth: 'Месяц',
  };

interface ViewAppFilter {
    viewAppBoard: string;
    viewAppTable: string;
}

export const ViewAppMap: {
    [K in keyof ViewAppFilter]: string;
  } = {
    viewAppBoard: 'Доска',
    viewAppTable: 'Таблица',
  };

export type StateAppFilter = 'stateHardCancel' | 'approveRM' |
  'stateVerificationOD' | 'stateDealApproved' | 'stateCreditIssue';

export const StateAppFilterMap: { [K in StateAppFilter]: string } = {
  stateHardCancel: 'Жесткий отказ',
  approveRM: 'На принятии решения РМ',
  stateVerificationOD: 'Верификация ОД',
  stateDealApproved: 'Одобрено',
  stateCreditIssue: 'Кредит выдан',
};

export interface ApplicationFilter {
  documentNumberSearch?: string,
  clientLastNameSearch?: string,
  clientFirstNameSearch?: string,
  clientMiddleNameSearch?: string,
  clientBirthdaySearch?: string,
  periodAppFilter?: string,
  viewAppBoardFilter?: string
  stateAppItemsFilter?: StateAppFilter[],
}

export interface IChipsParams {
  documentNumberSearch?: string,
  clientLastNameSearch?: string,
  clientFirstNameSearch?: string,
  clientMiddleNameSearch?: string,
  clientBirthdaySearch?: string,
  periodAppFilter?: string[],
  stateAppItemsFilter?: StateAppFilter[],
}

export const IChipsParamsLabels: {
  [K in keyof IChipsParams]: string;
} = {
  documentNumberSearch: 'Номер заявки',
  clientLastNameSearch: 'Фамилия',
  clientFirstNameSearch: 'Имя',
  clientMiddleNameSearch: 'Отчество',
  clientBirthdaySearch: 'Дата рождения',
  periodAppFilter: 'Период',
  stateAppItemsFilter: 'Состояние',
};

export const IChipsParamsValues: {
  [K in keyof IChipsParams]: { [key: string]: string };
} = {
  documentNumberSearch: {},
  clientLastNameSearch: {},
  clientFirstNameSearch: {},
  clientMiddleNameSearch: {},
  clientBirthdaySearch: {},
  periodAppFilter: IntervalDateFilterMap,
  stateAppItemsFilter: StateAppFilterMap,
};
