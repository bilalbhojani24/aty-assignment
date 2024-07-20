import React from 'react';
import { useModal } from '../../contexts/modalContext';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

const AuthModals: React.FC = () => {
  const { isModalOpen, modalType } = useModal();

  const renderModal = (): JSX.Element | null => {
    if (!isModalOpen) return null;
    return modalType === 'register' ? <RegisterModal /> : <LoginModal />;
  };

  return <>{renderModal()}</>;
};

export default AuthModals;
