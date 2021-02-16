import React, {useState} from 'react';
import {connect} from 'react-redux';
import {AuthPageContainer} from './style';
import {Input, Button} from '@openvtb/react-ui-kit';
const styles = require('./custom.css');
import * as Actions from 'src/data-layer/user/actionCreators';

import {IProps} from './interfaces';

function Auth(props: IProps) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const authAction = () => {
    console.log('authAction', {login, password});
    props.signIn({login, password});
  };

  return (
    <AuthPageContainer>
      <h2>Авторизация</h2>
      <Input.Text
        label="Логин"
        placeholder=""
        value={login}
        size="big"
        onChange={(event, value) => {
          setLogin(value);
        }}
      />
      <Input.Password
        label="Пароль"
        placeholder=""
        value={password}
        size="big"
        onChange={(event, value) => {
          setPassword(value);
        }}
      />
      <Button
        kind="primary"
        size="big"
        onClick={authAction}
        className={styles.button}
      >
        Войти
      </Button>
    </AuthPageContainer>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.userReducer.user
});

export default connect(mapStateToProps, Actions)(Auth);
