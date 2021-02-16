import API from 'src/api';
import {Dispatch} from 'redux';
// import {push} from 'connected-react-router';
import * as actionTypes from './actionTypes';
import {
  IReference,
  ReferenceAction,
  IReferenceItem,
  IApplication
} from './types';
import {sortBy} from 'src/components/table/helpers';

export function getReferences(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_REFERENCES});
      const response = await API.reference.findReferenceByParams(params);
      dispatch({
        type: actionTypes.GET_REFERENCES_SUCCESS,
        applications: response.data.content,
        totalPages: response.data.totalPages
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_REFERENCES_FAIL,
        error: error
      });
    }
  };
}

export function saveReference(data: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.SAVE_REFERENCE});
      const response = await API.reference.saveReference(data);
      dispatch({
        type: actionTypes.SAVE_REFERENCE_SUCCESS,
        reference: response.data
      });
      return response.data;
    } catch (error) {
      dispatch({
        type: actionTypes.SAVE_REFERENCE_FAIL
      });
    }
  };
}

export function saveReferenceItems(data: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.SAVE_REFERENCEITEM});
      await API.reference.saveReferenceItem(data);
      dispatch({
        type: actionTypes.SAVE_REFERENCEITEM_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: actionTypes.SAVE_REFERENCEITEM_FAIL
      });
    }
  };
}

export function updateReferenceItem(data:any, id: number) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.UPDATE_REFERENCEITEM});
      await API.reference.updateReferenceItem(data, id);
      dispatch({
        type: actionTypes.UPDATE_REFERENCEITEM_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_REFERENCEITEM_FAIL
      });
    }
  };
}

export function getReferenceItems(data: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_REFERENCEITEMS});
      const response = await API.reference.getReferenceItems(data);
      dispatch({
        type: actionTypes.GET_REFERENCEITEMS_SUCCESS,
        refEditRows: response.data.content
      });
      return response.data.content;
    } catch (error) {
      dispatch({
        type: actionTypes.GET_REFERENCEITEMS_FAIL
      });
    }
  };
}

export function deleteReferenceItem(id: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.DELETE_REFERENCEITEMS});
      await API.reference.deleteReferenceItem(id);
      dispatch({
        type: actionTypes.DELETE_REFERENCEITEMS_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_REFERENCEITEMS_FAIL
      });
    }
  };
}

export function updateReference(data:any, id: number) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.UPDATE_REFERENCE});
      const response = await API.reference.updateReference(data, id);
      dispatch({
        type: actionTypes.UPDATE_REFERENCE_SUCCESS,
        reference: response.data
      });
      return response.data;
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_REFERENCE_FAIL
      });
    }
  };
}

export function removeReferenceById(id: number) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.REMOVE_REFERENCE});
      await API.reference.removeReferenceById(id);
      dispatch({
        type: actionTypes.REMOVE_REFERENCE_SUCCESS,
        id: id
      });
    } catch (error) {
      dispatch({
        type: actionTypes.REMOVE_REFERENCE_FAIL
      });
    }
  };
}

export function findReferenceByParams(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_REFERENCES});
      const response = await API.reference.findReferenceByParams(params);
      dispatch({
        type: actionTypes.GET_REFERENCES_SUCCESS,
        applications: response,
        // applications: response.data.content,
        totalPages: response.data.totalPages
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_REFERENCES_FAIL,
        error
      });
    }
  };
}

export function findApplicationsByParams(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_APPLICATIONS});
      const sortArr = params.sort.split(',');
      let currentColumn = sortArr[0];
      const currentOrder = sortArr[1];
      if (currentColumn == 'creationDateStr') {
        currentColumn = 'creationDate';
      }
      const res = window.__vtb_proto_data_applications[params.page || 0]
          .slice(0)
          .sort(sortBy<IApplication>(currentColumn, currentOrder));
      const response = {data: {
        content: res,
        totalElements: 100,
        totalPages: 10
      }};
      // eslint-disable-next-line max-len
      // const responseTwo = await API.reference.findApplicationsByParams(params);
      dispatch({
        type: actionTypes.GET_APPLICATIONS_SUCCESS,
        applications: response,
        totalPages: response.data.totalPages
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_APPLICATIONS_FAIL,
        error
      });
    }
  };
}

export function getQuerySuggest(params: any = {}) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_QUERYSUGGEST});
      const response = await API.reference.findReferenceByParams(params);
      const key = Object.keys(params)[0];
      dispatch({
        type: actionTypes.GET_QUERYSUGGEST_SUCCESS,
        suggest: {
          [key]: response.data.content.map((ref: any) => ref[key] || '')
        },
        key
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_QUERYSUGGEST_FAIL,
        error
      });
    }
  };
}

export function addReferenceItem(
    refEditRows: IReferenceItem[]) {
  const action: ReferenceAction = {
    type: actionTypes.ADD_REFERENCEITEM_SUCCESS,
    refEditRows
  };
  return function(dispatch: Dispatch) {
    dispatch(action);
  };
}

export function removeReferenceItem(id: number) {
  const action: ReferenceAction = {
    type: actionTypes.REMOVE_REFERENCEITEM_SUCCESS,
    id
  };
  return function(dispatch: Dispatch) {
    dispatch(action);
  };
}

export function saveReferenceHeader(
    refEditHeader: IReference) {
  const action: ReferenceAction = {
    type: actionTypes.ADD_REFERENCEHEADER_SUCCESS,
    refEditHeader
  };
  return function(dispatch: Dispatch) {
    dispatch(action);
  };
}

export function clearReferenceItems() {
  const action: ReferenceAction = {
    type: actionTypes.CLEAR_REFERENCEITEMS_SUCCESS
  };
  return function(dispatch: Dispatch) {
    dispatch(action);
  };
}
