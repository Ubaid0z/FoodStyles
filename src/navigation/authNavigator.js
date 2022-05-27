import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, MainScreen, Signup, Profile, Home} from '../ui/screens';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MainScreen'}
        component={MainScreen}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={'Signup'}
        component={Signup}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
};
