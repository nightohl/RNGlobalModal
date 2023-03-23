import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {A} from '../screens/A';
import {B} from '../screens/B';
import {C} from '../screens/C';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="A" component={A} />
      <Stack.Screen name="B" component={B} />
      <Stack.Screen name="C" component={C} />
    </Stack.Navigator>
  );
};
