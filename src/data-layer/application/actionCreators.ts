import API from 'src/api';
import {Dispatch} from 'redux';
// import {push} from 'connected-react-router';
import * as actionTypes from './actionTypes';
import {
  IApplication
} from './types';
import {sortBy} from 'src/helpers/sorting';
import _ from 'lodash';

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

export function findApplicationsByParams(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_APPLICATIONS});
      let subDataApplication = window.__vtb_proto_data_applications
          .slice()
          .filter(
              item => item.number.includes(params.documentNumberSearch)
          )
          .filter(
              item => item.clientFIO.includes(params.clientLastNameSearch)
          )
          .filter(
              item => item.clientFIO.includes(params.clientFirstNameSearch)
          )
          .filter(
              item => item.clientFIO.includes(params.clientMiddleNameSearch)
          );
      if (params.clientBirthdaySearch) {
        subDataApplication = subDataApplication.filter(
            item => item.clientBirthday ==
            new Date(params.clientBirthdaySearch).getTime()
        );
      }
      if (params.stateAppItemsFilter) {
        const stateAppArray: string[] = [];
        params.stateAppItemsFilter.forEach(
            (item: any) => stateAppArray.push(item.value)
        );
        if (stateAppArray.length == 1 && stateAppArray[0] != 'stateAll' ||
        stateAppArray.length > 1 ) {
          subDataApplication = subDataApplication.filter(
              item => stateAppArray.indexOf(item.stateSysName) != -1
          );
        }
      }

      debugger;

      window.__vtb_proto_sub_data_applications =
       _.chunk(subDataApplication, 10);
      const sortArr = params.sort.split(',');
      let currentColumn = sortArr[0];
      const currentOrder = sortArr[1];
      if (currentColumn == 'creationDateStr') {
        currentColumn = 'creationDate';
      }
      const res = window.__vtb_proto_sub_data_applications[params.page || 0]
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
