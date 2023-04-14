import {StackActions, useNavigation} from '@react-navigation/native';
import {ReactElement, useCallback} from 'react';

interface Return {
  openGlobalModal: (modal: ReactElement) => void;
  closeGlobalModal: () => void;
}

export const useGlobalModal = (): Return => {
  const {dispatch, goBack} = useNavigation();

  const openGlobalModal = useCallback(
    (modal: ReactElement) => {
      const pushAction = StackActions.push('GlobalModal', {modal});
      dispatch(pushAction);
    },
    [dispatch],
  );

  return {
    openGlobalModal,
    closeGlobalModal: goBack,
  };
};
