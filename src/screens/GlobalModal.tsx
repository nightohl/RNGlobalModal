import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {MyStackRouteProp} from '../navigator/types';

export const GlobalModal = () => {
  const {
    params: {modal},
  } = useRoute<MyStackRouteProp<'GlobalModal'>>();

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.center}>{modal}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {flex: 1, backgroundColor: '#0000007F'},
});
