/* eslint-disable @typescript-eslint/no-shadow */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import {MyStackNavigationProp, MyStackScreenNames} from '../navigator/types';

type NavigateScreenNames = Exclude<MyStackScreenNames, 'GlobalModal'>;

interface Props<T extends NavigateScreenNames> {
  screen: T;
}

export const NavigateButton = <T extends NavigateScreenNames>({
  screen,
}: Props<T>) => {
  const {navigate} = useNavigation<MyStackNavigationProp<T>>();

  return (
    <Button
      title={`GoTo ${screen}`}
      onPress={() => navigate(screen as NavigateScreenNames)}
    />
  );
};
