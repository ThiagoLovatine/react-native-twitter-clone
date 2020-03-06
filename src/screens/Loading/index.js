import React, {useEffect} from 'react';

import {Container} from './styles';
import Spinner from '../../components/Spinner';
import {useSelector, useDispatch} from 'react-redux';
import {loadStart} from '../../store/actions/user';
import {StackActions} from '@react-navigation/native';

function LoadingScreen(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (!user.loading) {
      if (user.success) {
        props.navigation.dispatch(StackActions.replace('MainNavigation'));
      } else {
        props.navigation.dispatch(StackActions.replace('Login'));
      }
    }
  }, [user]);

  useEffect(() => {
    loadUser();
  }, []);

  function loadUser() {
    dispatch(loadStart());
  }

  return (
    <Container>
      <Spinner />
    </Container>
  );
}

export default LoadingScreen;
