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
      <Stack.Group>
        <Stack.Screen name="A" component={A} />
        <Stack.Screen name="B" component={B} />
        <Stack.Screen name="C" component={C} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
          detachPreviousScreen: false,
        }}>
        <Stack.Screen name="GlobalModal" component={GlobalModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
