import * as actionTypes from './actionTypes';
import {
  ApplicationAction,
  ApplicationState
} from './types';

const initialState: any = {
  suggest: {
    number: []
  },
  deletedItems: []
};

const applicationReducer = (
    state: any = initialState,
    action: ApplicationAction
): ApplicationState => {
  switch (action.type) {
    case actionTypes.GET_APPLICATIONS:
      return {
        ...state,
        appIsLoading: true
      };
    case actionTypes.GET_APPLICATIONS_SUCCESS:
      return {
        ...state,
        appIsLoading: false,
        applications: action.applications,
        totalPages: action.totalPages
      };
  }
  return state;
};

export default applicationReducer;
