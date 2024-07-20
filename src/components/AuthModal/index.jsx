import React, { useState } from 'react';
import { useModal } from '../../contexts/modalContext';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

const AuthModals = () => {
  const { isModalOpen, modalType } = useModal();

  const renderModal = () => {
    if (!isModalOpen) return null;
    return modalType === 'register' ? <RegisterModal /> : <LoginModal />;
  };

  return <>{renderModal()}</>;
};

export default AuthModals;
