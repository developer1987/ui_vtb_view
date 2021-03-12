export interface IApplication {
  uuid: string
  id: string
  number: string
  creationDate: number
  creationDateStr: string
  clientFIO: string
  clientBirthday: number
  clientBirthdayStr: string
  processingService: string
  stateSysName: string
  stateName: string
  employeeFIO: string
  appTransition: IAppTransition[]
  appAttributes: IAppAttributes
}

export interface IAppTransition {
  stateName: string
  stateDate: string
  stateResult: string
  userCRMID: string
  userFullName: string
  comment: string
}

export interface IAppAttributes {
  city: string
  salesChannel: string
  depInitial: string
  salesSecondChannel: string
  typeGuaranty: string
  product: string
  programm: string
  cityBuyCar: string
  carShowroom: string
  kindCar: string
  typeCar: string
  markCar: string
  modelCar: string
  clientGender: string
  clientYear: string
  clientPlaceBirthday: string
  snils: string
  citizenship: string
  isResident: string
  isSalaryClient: string
  passportRF: string
  passportForeign: string
  factRegistrationAddress: string
  permanentRegistrationAddress: string
  clientMobilePhone: string
  clientPhoneOther: string
}

export interface stateAppFilter {
  label: string
  value: string
}

export interface IFilterParams {
  periodAppFilter: string
  viewAppBoardFilter: string
  stateAppItemsFilter: stateAppFilter[]
  opened: boolean
}
export interface ISearchParams {
  documentNumberSearch: string
  clientLastNameSearch: string
  clientFirstNameSearch: string
  clientMiddleNameSearch: string
  clientBirthdaySearch: string
  opened: boolean
}

type GetApplication = {
  type: 'GET_APPLICATIONS'
  applications: IApplication[]
}

type GetApplicationAction = {
  type: 'GET_APPLICATIONS_SUCCESS'
  applications: IApplication[]
  totalPages: number
}

export type SortingOrder = 'asc' | 'desc';

export type ApplicationState = {
  applications: IApplication[]
}

export type ApplicationAction =
  GetApplication |
  GetApplicationAction;
