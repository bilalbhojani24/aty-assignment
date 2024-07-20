import React from 'react';
import AuthModals from './components/AuthModal';
import CommunityPage from './components/CommunityPage';

const App: React.FC = () => {
  return (
    <>
      <CommunityPage />
      <AuthModals />
    </>
  );
};

export default App;
