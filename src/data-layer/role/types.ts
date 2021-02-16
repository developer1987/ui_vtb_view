export interface IRole {
  id: number
  name: string
  sysname: string
  description: string
}

export interface IRoleRefLink {
  referenceId: number
  roleId: number
}

export interface IRoleRefItemLink {
  referenceItemId: number
  roleId: number
}

type AddRoleAction = {
  type: 'CHANGE_ROLESDATA_SUCCESS'
  roleData: IRole
}

type GetRolesAction = {
  type: 'GET_ROLES'
  roleData: IRole
}

type GetRolesSuccessAction = {
  type: 'GET_ROLES_SUCCESS'
  roles: IRole[]
  totalPages: number
}

type UpdateRolesSuccessAction = {
  type: 'UPDATE_ROLES_REDUCER_SUCCESS'
  roles: IRole[]
}

type GetRoleRefLinksAction = {
  type: 'GET_ROLE_REFLINK_SUCCESS'
  roleRefLinks: IRoleRefLink[]
}

type GetRoleRefItemLinksAction = {
  type: 'GET_ROLE_REFITEMLINK_SUCCESS'
  roleRefItemLinks: IRoleRefItemLink[]
}

type RoleRefLinkMassCreateAction = {
  type: 'ROLE_REFLINK_MASS_CREATE_SUCCESS'
  roles: IRoleRefLink[]
}

type RoleRefLinkMassDeleteAction = {
  type: 'ROLE_REFLINK_MASS_DELETE_SUCCESS'
  roles: IRoleRefLink[]
}

export type RoleState = {
  roleData: IRole
  roles: IRole[]
}

export type RoleAction =
  AddRoleAction |
  GetRolesAction |
  GetRolesSuccessAction |
  UpdateRolesSuccessAction |
  RoleRefLinkMassCreateAction |
  GetRoleRefLinksAction |
  GetRoleRefItemLinksAction |
  RoleRefLinkMassDeleteAction
;
