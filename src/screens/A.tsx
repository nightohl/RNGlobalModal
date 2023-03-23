import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigateButton} from '../components/NavigateButton';

export const A = () => {
  return (
    <SafeAreaView>
      <Text>A</Text>
      <NavigateButton screen="B" />
      <NavigateButton screen="GlobalModal" />
    </SafeAreaView>
  );
};
