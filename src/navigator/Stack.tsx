import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {A} from '../screens/A';
import {B} from '../screens/B';
import {C} from '../screens/C';
import {GlobalModal} from '../screens/GlobalModal';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="A" component={A} />
      <Stack.Screen name="B" component={B} />
      <Stack.Screen name="C" component={C} />
      <Stack.Screen name="GlobalModal" component={GlobalModal} />
    </Stack.Navigator>
  );
};
