import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

export const GlobalModal = () => {
  const {params} = useRoute();

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#0000007F'}}></SafeAreaView>
  );
};
