type IntervalDateFilter = 'intevalDateAll' |
  'intevalDateToday' | 'intevalDateWeek' | 'intevalDateMonth';

export const IntervalDateFilterMap:
  { [K in IntervalDateFilter]: string } = {
    intevalDateAll: 'Все',
    intevalDateToday: 'Сегодня',
    intevalDateWeek: 'Неделя',
    intevalDateMonth: 'Месяц',
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

type StateAppFilter = 'stateAll' |
  'stateHardCancel' | 'approveRM' | 'stateVerificationOD' |
   'stateDealApproved' | 'stateCreditIssue';

export const StateAppFilterMap: { [K in StateAppFilter]: string } = {
  stateAll: 'Все',
  stateHardCancel: 'Жесткий отказ',
  approveRM: 'На принятии решения РМ',
  stateVerificationOD: 'Верификация ОД',
  stateDealApproved: 'Одобрено',
  stateCreditIssue: 'Кредит выдан',
};
