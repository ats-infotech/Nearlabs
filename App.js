import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/auth';
import { useColorScheme } from 'react-native';
import {darkTheme, lightTheme} from './src/constants/theme';
import {AppContext} from './src/provider'
import {initialState,tourReducer} from './src/reducers'
import {useReducer} from "react";
import { userReducer } from './src/reducers/users';

export default function App() {
  const scheme = useColorScheme();
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <AuthStack/>
    </NavigationContainer>
    </AppContext.Provider>
  );
}