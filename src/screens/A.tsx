import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {NavigateButton} from '../components/NavigateButton';
import {useModalA} from '../features/ModalA/hooks/useModalA';

export const A = () => {
  const {openModal} = useModalA({
    title: 'Some Error',
    description: 'blah blah',
  });

  const multipleModals = () => {
    openModal();
    setTimeout(() => openModal(), 500);
    setTimeout(() => openModal(), 1000);
    setTimeout(() => openModal(), 1500);
  };

  return (
    <SafeAreaView>
      <Text>A</Text>
      <NavigateButton screen="B" />
      <Button title="GlobalModal" onPress={multipleModals} />
    </SafeAreaView>
  );
};
