import * as actionTypes from './actionTypes';
import {
  RoleState,
  RoleAction
} from './types';

const initialState: any = {
  roleData: {}
};

const roleReducer = (
    state: any = initialState,
    action: RoleAction
): RoleState => {
  switch (action.type) {
    case actionTypes.GET_ROLES:
      return {
        ...state,
        roleIsloading: true,
        rolesIsLoading: true
      };
    case actionTypes.GET_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.roles,
        totalPages: action.totalPages,
        roleIsloading: false
      };
    case actionTypes.UPDATE_ROLES_REDUCER_SUCCESS:
      return {
        ...state,
        roles: action.roles
      };
    case actionTypes.CHANGE_ROLESDATA_SUCCESS:
      return {
        ...state,
        roleData: action.roleData
      };
    case actionTypes.GET_ROLE_REFLINK_SUCCESS: {
      const roleRefLinks = action.roleRefLinks.map(link => link.roleId);
      return {
        ...state,
        roleRefLinks: action.roleRefLinks,
        roles: state.roles.map((role: any) => {
          role.checked = roleRefLinks.indexOf(role.id) >= 0;
          return role;
        }),
        rolesIsLoading: false
      };
    }
    case actionTypes.GET_ROLE_REFITEMLINK_SUCCESS: {
      const roleRefLinks = action.roleRefItemLinks.map(link => link.roleId);
      return {
        ...state,
        roleRefItemLinks: action.roleRefItemLinks,
        roles: state.roles.map((role: any) => {
          role.checked = roleRefLinks.indexOf(role.id) >= 0;
          return role;
        }),
        rolesIsLoading: false
      };
    }
  }
  return state;
};

export default roleReducer;
