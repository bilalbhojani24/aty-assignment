import { useState } from 'react';
import { handleInputChange, handleRegister } from './utils';
import { useModal } from '../../contexts/modalContext';
import {
  EMAIL_LABEL_R_TEXT,
  USERNAME_TEXT,
  PASSWORD_TEXT,
  CREATE_ACCOUNT_TEXT,
  SIGNUP_TEXT,
  CONTINUE_TEXT,
  ALREADY_ACCOUNT_TEXT,
  LOGIN_TEXT,
} from './constants';
import InputField from '../InputField';
import CrossIcon from '../../assets/cross.svg';
import Button from '../Button';

const RegisterModal = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { openModal, closeModal } = useModal();
  return (
    <div className="fixed inset-0 bg-black-1400 bg-opacity-50 flex items-center justify-center">
      <div className="bg-black-1200 p-8 rounded-lg w-full md:w-1/3 relative border-2 border-black-1100">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white-1100 hover:text-white bg-black-1500 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 text-xl"
        >
          <img src={CrossIcon} />
        </button>
        <div className="text-center">
          <h2 className="text-white-1400  mb-2">{SIGNUP_TEXT}</h2>
          <h1 className="text-white-1300 text-2xl font-semibold mb-6">
            {CREATE_ACCOUNT_TEXT}
          </h1>
        </div>
        <form
          onSubmit={(e) => handleRegister(e, formData)}
          className="space-y-4"
        >
          <InputField
            name="email"
            type="text"
            label={EMAIL_LABEL_R_TEXT}
            value={formData.email}
            inputPlaceholder="Enter your email"
            onChange={(e) => handleInputChange(e, setFormData)}
          />

          <InputField
            name="username"
            type="text"
            label={USERNAME_TEXT}
            value={formData.username}
            inputPlaceholder="Choose a preferred username"
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          <InputField
            name="password"
            type="password"
            label={PASSWORD_TEXT}
            value={formData.password}
            inputPlaceholder="Enter your password"
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          <Button type="submit" label={CONTINUE_TEXT} />
        </form>
        <p className="text-white-1200 mt-4 ">
          {ALREADY_ACCOUNT_TEXT}
          <button
            onClick={() => openModal('login')}
            className="text-white-1100"
          >
            {LOGIN_TEXT}
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
