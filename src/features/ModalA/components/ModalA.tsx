import React, {ReactElement} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {BaseModal} from '../../../components/BaseModal';

export interface ModalAProps {
  title: string;
  description: string;
  onPress: () => void;
}

export const ModalA = ({
  title,
  description,
  onPress,
}: ModalAProps): ReactElement => {
  return (
    <BaseModal
      title={<Text style={styles.titleText}>{title}</Text>}
      content={<Text style={styles.descriptionText}>{description}</Text>}
      buttons={<Button title="Ok" onPress={onPress} />}
    />
  );
};

const styles = StyleSheet.create({
  titleText: {fontSize: 30, paddingBottom: 10},
  descriptionText: {fontSize: 20, paddingBottom: 10},
});
