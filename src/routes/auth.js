import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../containers/Auth/Login';
import UserSelection from "../containers/Auth/UserSelection";
import {screenTitle} from '../constants/index'
import CreateNfts from '../containers/Auth/Nfts';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
      <Stack.Navigator initialRouteName={screenTitle.LOGIN}>
        <Stack.Screen name={screenTitle.LOGIN} component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name={screenTitle.USERS} component={UserSelection} options={{headerShown: true}}/>
          <Stack.Screen name={screenTitle.NFT} component={CreateNfts} options={{headerShown: true}}/>
      </Stack.Navigator>
    );
  }
  
  export default AuthStack;