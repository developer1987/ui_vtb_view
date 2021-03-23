import API from 'src/api';
import {Dispatch} from 'redux';
// import {push} from 'connected-react-router';
import * as actionTypes from './actionTypes';
import {
  IApplication
} from './types';
import {sortBy} from 'src/helpers/sorting';
import _ from 'lodash';

export function findApplicationsByParams(params: any) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({type: actionTypes.GET_APPLICATIONS});
      let subDataApplication = window.__vtb_proto_data_applications
          .slice()
          .filter(
              item => item.number.toLowerCase()
                  .includes(params.documentNumberSearch.toLowerCase().trim())
          )
          .filter(
              item => item.clientFIO.toLowerCase()
                  .includes(params.clientLastNameSearch.toLowerCase().trim())
          )
          .filter(
              item => item.clientFIO.toLowerCase()
                  .includes(params.clientFirstNameSearch.toLowerCase().trim())
          )
          .filter(
              item => item.clientFIO.toLowerCase()
                  .includes(params.clientMiddleNameSearch.toLowerCase().trim())
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
      if (params.periodAppFilter &&
        params.periodAppFilter != 'intervalDateAll') {
        const now = new Date();
        const maxDateUTC : any = new Date(now.getTime() +
        now.getTimezoneOffset() * 60000);
        maxDateUTC.setHours(23, 59, 59);
        const minDateUTC : any = new Date(now.getTime() +
        now.getTimezoneOffset() * 60000);
        switch (params.periodAppFilter+'') {
          case 'intervalDateToday': {
            minDateUTC.setHours(0, 0, 0);
            break;
          }
          case 'intervalDateWeek': {
            minDateUTC.setDate(minDateUTC.getUTCDate() - 7);
            break;
          }
          case 'intervalDateMonth': {
            const month = minDateUTC.getUTCMonth();
            minDateUTC.setMonth(minDateUTC.getMonth() - 1);
            while (minDateUTC.getUTCMonth() === month) {
              minDateUTC.setDate(minDateUTC.getUTCDate() - 1);
            }
            break;
          }
        }
        subDataApplication = subDataApplication.filter(
            item => item.creationDate > minDateUTC.getTime() &&
            item.creationDate < maxDateUTC.getTime()
        );
      }
      const totalElements = subDataApplication.length;
      const totalPages = (totalElements % 10 == 0) ? totalElements/10 :
      Math.round(totalElements/10) + 1;
      window.__vtb_proto_sub_data_applications =
       _.chunk(subDataApplication, 10);
      const sortArr = params.sort.split(',');
      let currentColumn = sortArr[0];
      const currentOrder = sortArr[1];
      if (currentColumn == 'creationDateStr') {
        currentColumn = 'creationDate';
      }
      const res = window.__vtb_proto_sub_data_applications.length > 0 ?
      window.__vtb_proto_sub_data_applications[params.page || 0]
          .slice(0)
          .sort(sortBy<IApplication>(currentColumn, currentOrder)) : [];
      const response = {
        data: {
          content: res,
          totalElements: totalElements,
          totalPages: totalPages
        }
      };
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
