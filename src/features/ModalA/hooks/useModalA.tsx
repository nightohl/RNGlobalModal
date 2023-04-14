import React, {useCallback} from 'react';
import {useGlobalModal} from '../../../hooks/useGlobalHook';
import {Optional} from '../../../types';
import {ModalA, ModalAProps} from '../components/ModalA';

interface Return {
  openModal: () => void;
}

export const useModalA = ({
  title,
  description,
  onPress,
}: Optional<ModalAProps, 'onPress'>): Return => {
  const {openGlobalModal, closeGlobalModal} = useGlobalModal();

  const closeModal = useCallback(() => {
    closeGlobalModal();
    onPress?.();
  }, [closeGlobalModal, onPress]);

  const openModal = useCallback(() => {
    openGlobalModal(
      <ModalA title={title} description={description} onPress={closeModal} />,
    );
  }, [closeModal, description, openGlobalModal, title]);

  return {
    openModal,
  };
};
