import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Switch,
  Route, RouteComponentProps, useRouteMatch} from 'react-router-dom';
import {routes, IRouter} from 'src/routes';
import * as Actions from 'src/data-layer/user/actionCreators';
import '../assets/style/fonts.css';
import {GlobalStyle} from '../assets/normalize';

import ScrollBar from 'src/components/scroll-bar';

export interface MainProps {
  isFederate: boolean
  user: any
  pushAction: any
  signOut: any
  userName: string
}

const App = (props: MainProps) => {
  const {/* user, signOut, */pushAction, isFederate} = props;
  const {path} = useRouteMatch();
  const getActiveUrl = (list: any[]) => {
    return list.filter(item => item.active === true)[0].to;
  };
  return (
    <div style={{backgroundColor: '#EDF5FF'}}>
      <GlobalStyle />
      <div style={{position: 'relative', /* marginTop: '6.8vh'*/}}>
        <Switch>
          {routes.map((route: IRouter, i: number) => (
            <Route
              key={i}
              exact={route.exact}
              path={`${path}${route.path}`}
              render={(props: RouteComponentProps) => {
                return <ScrollBar
                  height={`calc(100vh - ${isFederate ? 104 : 48}px)`}>
                  <route.component {...props} />
                </ScrollBar>;
              }}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return ({
    user: state.userReducer.user
  });
};

export default connect(mapStateToProps, Actions)(App);
