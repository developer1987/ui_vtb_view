import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../history';
import App from './app';
import store from '../data-layer/store';

// const App =  React.lazy(() => import("./app"));

export default (props: any) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App {...props}/>
      </ConnectedRouter>
    </Provider>
  );
};
