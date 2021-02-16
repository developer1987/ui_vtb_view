export interface IReferenceItem {
  id: number
  referenceItemCode: string
  referenceItemName: string
  referenceItemBrief: string
  referenceItemComment: string
}

export interface IReference {
  id: number
  name: string
  sysname: string
  description: string
  referenceItems: IReferenceItem[]
}

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

type GetReference = {
  type: 'GET_REFERENCES'
  references: IReference[]
}

type GetApplication = {
  type: 'GET_APPLICATIONS'
  applications: IApplication[]
}

type GetReferenceAction = {
  type: 'GET_REFERENCES_SUCCESS'
  references: IReference[]
  totalPages: number
}

type GetApplicationAction = {
  type: 'GET_APPLICATIONS_SUCCESS'
  applications: IApplication[]
  totalPages: number
}

export type SortingOrder = 'asc' | 'desc';

type GetReferenceItemsAction = {
  type: 'GET_REFERENCEITEMS'
  refEditRows: IReferenceItem[]
}

type GetReferenceItemsSuccessAction = {
  type: 'GET_REFERENCEITEMS_SUCCESS'
  refEditRows: IReferenceItem[]
}

type GetReferenceSuggestAction = {
  type: 'GET_QUERYSUGGEST_SUCCESS'
  suggest: string[]
}

type SaveReferenceAction = {
  type: 'SAVE_REFERENCE_SUCCESS'
  reference: IReference
}

type UpdateReference = {
  type: 'UPDATE_REFERENCE_SUCCESS'
  reference: IReference
}

type AddReferenceHeaderAction = {
  type: 'ADD_REFERENCEHEADER_SUCCESS'
  refEditHeader: IReference
}

type AddReferenceItemAction = {
  type: 'ADD_REFERENCEITEM_SUCCESS'
  refEditRows: IReferenceItem[]
}

type RemoveReferenceItemAction = {
  type: 'REMOVE_REFERENCEITEM_SUCCESS'
  id: number
}

type UpdateReferenceItemAction = {
  type: 'UPDATE_REFERENCEITEM_SUCCESS'
  references: IReference[]
}

type ClearReferenceAction = {
  type: 'CLEAR_REFERENCEITEMS_SUCCESS'
}

type RemoveReferenceAction = {
  type: 'REMOVE_REFERENCE_SUCCESS'
  id: number
}

export type ReferenceState = {
  references: IReference[]
  refEditRows: IReferenceItem[]
  refEditHeader: any
}

export type ApplicationState = {
  applications: IApplication[]
  refEditRows: IReferenceItem[]
  refEditHeader: any
}

export type ReferenceAction =
  SaveReferenceAction |
  UpdateReference |
  GetReference |
  GetReferenceAction |
  ClearReferenceAction |
  AddReferenceItemAction |
  RemoveReferenceItemAction |
  UpdateReferenceItemAction |
  AddReferenceHeaderAction |
  RemoveReferenceAction |
  GetReferenceSuggestAction |
  GetReferenceItemsAction |
  GetReferenceItemsSuccessAction
;

export type ApplicationAction =
  GetApplication |
  GetApplicationAction;
