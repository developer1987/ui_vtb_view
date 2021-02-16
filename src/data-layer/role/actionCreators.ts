import API from 'src/api';
import {Dispatch} from 'redux';
// import {push} from 'connected-react-router';
import * as actionTypes from './actionTypes';
import {
  IRole,
  RoleAction
} from './types';

export function getRoles(params: any, callBalck: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_ROLES});
      const response = await API.roles.getRoles(params);
      dispatch({
        type: actionTypes.GET_ROLES_SUCCESS,
        roles: response,
        totalPages: response.data.totalPages
      });
      if (callBalck) {
        callBalck();
      }
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ROLES_FAIL,
        error: error
      });
    }
  };
}

export function updateRolesInReducer(
    roles: any) {
  const action: RoleAction = {
    type: actionTypes.UPDATE_ROLES_REDUCER_SUCCESS,
    roles
  };
  return function(dispatch: Dispatch) {
    dispatch(action);
  };
}

export function changeRolesData(
    roleData: IRole) {
  const action: RoleAction = {
    type: actionTypes.CHANGE_ROLESDATA_SUCCESS,
    roleData
  };
  return function(dispatch: Dispatch) {
    dispatch(action);
  };
}

export function saveRole(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.SAVE_ROLE});
      const response = await API.roles.roleCreate(params);
      dispatch({
        type: actionTypes.SAVE_ROLE_SUCCESS,
        applications: response.data.content,
        totalPages: response.data.totalPages
      });
    } catch (error) {
      dispatch({
        type: actionTypes.SAVE_ROLE_FAIL,
        error: error
      });
    }
  };
}

export function removeRoleById(id: number) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.REMOVE_ROLE});
      await API.roles.deleteRoleById(id);
      dispatch({
        type: actionTypes.REMOVE_ROLE_SUCCESS,
        /* applications: response.data.content,
        totalPages: response.data.totalPages*/
      });
    } catch (error) {
      dispatch({
        type: actionTypes.REMOVE_ROLE_FAIL,
        error: error
      });
    }
  };
}

export function updateRoleById(data: any, id: number) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.UPDATE_ROLE});
      await API.roles.roleUpdateById(data, id);
      dispatch({
        type: actionTypes.UPDATE_ROLE_SUCCESS,
        /* applications: response.data.content,
        totalPages: response.data.totalPages*/
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_ROLE_FAIL,
        error: error
      });
    }
  };
}

export function getRoleRefLinksByParams(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_ROLE_REFLINK});
      const response = await API.roleRefLink.getRoleRefLinks(params);
      dispatch({
        type: actionTypes.GET_ROLE_REFLINK_SUCCESS,
        roleRefLinks: response.data.content
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ROLE_REFLINK_FAIL,
        error: error
      });
    }
  };
}

export function roleRefLinkMassCreate(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.ROLE_REFLINK_MASS_CREATE});
      await API.roleRefLink.roleRefLinksMassCreate(params);
      dispatch({
        type: actionTypes.ROLE_REFLINK_MASS_CREATE_SUCCESS,
        /* applications: response.data.content,
        totalPages: response.data.totalPages*/
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ROLE_REFLINK_MASS_CREATE_FAIL,
        error: error
      });
    }
  };
}

export function roleRefLinkMassDelete(params: any, callBalck: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.ROLE_REFLINK_MASS_DELETE});
      await API.roleRefLink.rolesRefLinksMassDelete(params);
      dispatch({
        type: actionTypes.ROLE_REFLINK_MASS_DELETE_SUCCESS,
        /* applications: response.data.content,
        totalPages: response.data.totalPages*/
      });
      if (callBalck) {
        callBalck();
      }
    } catch (error) {
      dispatch({
        type: actionTypes.ROLE_REFLINK_MASS_DELETE_FAIL,
        error: error
      });
    }
  };
}


export function getRoleRefItemLinksByParams(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_ROLE_REFITEMLINK});
      const response = await API.roleRefItemLink.getRoleRefItemLinks(params);
      dispatch({
        type: actionTypes.GET_ROLE_REFITEMLINK_SUCCESS,
        roleRefItemLinks: response.data.content
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ROLE_REFITEMLINK_FAIL,
        error: error
      });
    }
  };
}

export function roleRefItemLinkMassCreate(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.ROLE_REFITEMLINK_MASS_CREATE});
      // eslint-disable-next-line max-len
      await API.roleRefItemLink.roleRefItemLinksMassCreate(params);
      dispatch({
        type: actionTypes.ROLE_REFITEMLINK_MASS_CREATE_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ROLE_REFITEMLINK_MASS_CREATE_FAIL,
        error: error
      });
    }
  };
}

export function roleRefItemLinkMassDelete(params: any, callBalck: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.ROLE_REFITEMLINK_MASS_DELETE});
      // eslint-disable-next-line max-len
      await API.roleRefItemLink.rolesRefItemLinksMassDelete(params);
      dispatch({
        type: actionTypes.ROLE_REFITEMLINK_MASS_DELETE_SUCCESS
      });
      if (callBalck) {
        callBalck();
      }
    } catch (error) {
      dispatch({
        type: actionTypes.ROLE_REFITEMLINK_MASS_DELETE_FAIL,
        error: error
      });
    }
  };
}
