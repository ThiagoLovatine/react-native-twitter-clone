import React, {useState, useEffect} from 'react';

import {Container, MainContent} from './styles';
import InputMaster from '../../components/InputMaster';
import {TwitterIcon} from './styles';
import Title from '../../components/Title';
import Button from '../../components/Button';
import AuthLoginValidator from '../../validators/auth/login';
import KeyboardAvoid from '../../components/KeyboardAvoid';

export default function AuthLoginScreen() {
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setFormValid(AuthLoginValidator({uid, password}));
    console.log(uid, password);
  }, [uid, password]);

  function submit() {
    if (!formValid) return;
    console.log('Form login');
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
