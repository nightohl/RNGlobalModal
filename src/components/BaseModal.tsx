import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  title?: ReactElement;
  content?: ReactElement;
  buttons?: ReactElement;
}

export const BaseModal = ({title, content, buttons}: Props): ReactElement => {
  return (
    <View style={styles.modalContainer}>
      {Boolean(title) && title}
      {Boolean(content) && content}
      {Boolean(buttons) && buttons}
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },
});
