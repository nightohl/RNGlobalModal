import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigateButton} from '../components/NavigateButton';

export const C = () => {
  return (
    <SafeAreaView>
      <Text>C</Text>
      <NavigateButton screen="A" />
      <NavigateButton screen="GlobalModal" />
    </SafeAreaView>
  );
};
