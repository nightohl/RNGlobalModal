import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigateButton} from '../components/NavigateButton';

export const B = () => {
  return (
    <SafeAreaView>
      <Text>B</Text>
      <NavigateButton screen="C" />
      <NavigateButton screen="GlobalModal" />
    </SafeAreaView>
  );
};
