import React, {useState, useEffect} from 'react';

import {Container, MainContent} from './styles';
import InputMaster from '../../components/InputMaster';
import {TwitterIcon} from './styles';
import Title from '../../components/Title';
import Button from '../../components/Button';
import AuthLoginValidator from '../../validators/auth/login';
import KeyboardAvoid from '../../components/KeyboardAvoid';
import {useDispatch, useSelector} from 'react-redux';
import {loginStart} from '../../store/actions/auth';
import AlertHelper from '../../helpers/alert';
import {StackActions} from '@react-navigation/native';

export default function AuthLoginScreen(props) {
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');
  const distpatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    setFormValid(AuthLoginValidator({uid, password}));
  }, [uid, password]);

  useEffect(() => {
    if (!auth.loading) {
      setLoading(false);
      if (auth.success) {
        props.navigation.dispatch(StackActions.replace('MainNavigation'));
      } else {
        AlertHelper.standard('Error', 'Wrong email/username or password');
      }
    }
  }, [auth]);

  function submit() {
    if (!formValid) return;
    setLoading(true);
    distpatch(loginStart({uid, password}));
  }

  return (
    <KeyboardAvoid>
      <Container>
        <MainContent>
          <TwitterIcon name="twitter" />
          <Title text="Log in to Twitter Clone" />
          <InputMaster label="Email or username" onChangeText={setUid} />
          <InputMaster label="Password" onChangeText={setPassword} />
          <Button
            text="Log in"
            onPress={submit}
            loading={loading}
            active={formValid}
          />
        </MainContent>
      </Container>
    </KeyboardAvoid>
  );
}
