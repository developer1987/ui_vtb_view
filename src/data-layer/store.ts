import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import applicationsReducer from 'src/data-layer/application/reducer';
import {history} from 'src/history';

const isDev = process.env.NODE_ENV === 'development';

const logger = createLogger({
  collapsed: true
});

const createRootReducer = () => combineReducers({
  router: connectRouter(history),
  applicationsReducer,
});
const routerMiddle = routerMiddleware(history);

const getMiddlewares = () => {
  return isDev ? [routerMiddle, thunk, logger] : [routerMiddle, thunk];
};

const store = createStore(
    createRootReducer(),
    applyMiddleware(...getMiddlewares())
);

export default store;
