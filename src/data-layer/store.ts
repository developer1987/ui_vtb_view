import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import applicationReducer from 'src/app/reducer';
import userReducer from 'src/data-layer/user/reducer';
import applicationsReducer from 'src/data-layer/reference/reducer';
import roleReducer from 'src/data-layer/role/reducer';
// import welcomeReducer from 'src/pages/welcome/reduce';
import {history} from 'src/history';

const isDev = process.env.NODE_ENV === 'development';
// const isProd = process.env.NODE_ENV === 'production';

const logger = createLogger({
  collapsed: true
});

const createRootReducer = () => combineReducers({
  router: connectRouter(history),
  applicationReducer: applicationReducer,
  userReducer,
  applicationsReducer,
  roleReducer,
  // welcomeReducer
});
const routerMiddle = routerMiddleware(history);

const getMiddlewares = () => {
  return isDev ? [routerMiddle, thunk, logger] : [routerMiddle, thunk];
};

const persistedState = localStorage.getItem('LKRefreduxState')?
  JSON.parse(localStorage.getItem('LKRefreduxState')): {};

const store = createStore(
    createRootReducer(),
    // persistedState,
    applyMiddleware(...getMiddlewares())
);

store.subscribe(() => {
  localStorage.setItem('LKRefreduxState', JSON.stringify(store.getState()));
});

export default store;
