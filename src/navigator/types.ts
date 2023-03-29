import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ReactElement} from 'react';

export type MyStackParamList = {
  A: undefined;
  B: undefined;
  C: undefined;
  GlobalModal: {
    modal?: ReactElement;
  };
};

export type MyStackScreenNames = keyof MyStackParamList;

export type MyStackNavigationProp<T extends MyStackScreenNames> =
  StackNavigationProp<MyStackParamList, T>;

export type MyStackRouteProp<T extends MyStackScreenNames> = RouteProp<
  MyStackParamList,
  T
>;
