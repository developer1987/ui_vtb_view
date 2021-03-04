export interface IApplication {
  uuid: string
  id: string
  number: string
  creationDate: number
  creationDateStr: string
  clientFIO: string
  processingService: string
  state: string
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
  clientBirthday: string
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

export interface IFilterParams {
  perionAppFilter: string
  viewAppFilter: string
  stateAppItemsFilter: string
  opened: boolean
}

export interface ISearchParams {
  documentNumber: string
  clientLastNameSearch: string
  clientFirstNameSearch: string
  clientMiddleNameSearch: string
  clientBirthdaySearch: Date
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
  refEditRows: IReferenceItem[]
  refEditHeader: any
}

export type ApplicationAction =
  GetApplication |
  GetApplicationAction;
