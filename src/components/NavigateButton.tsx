import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';

interface Props {
  screen: 'A' | 'B' | 'C' | 'GlobalModal';
}

export const NavigateButton = ({screen}: Props) => {
  const {navigate} = useNavigation();

  return (
    <Button
      title={`GoTo ${screen}`}
      onPress={() => {
        navigate(screen);
      }}
    />
  );
};
