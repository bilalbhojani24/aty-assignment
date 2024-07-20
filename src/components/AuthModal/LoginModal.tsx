import React, { useState, ChangeEvent, FormEvent } from 'react';
import { handleInputChange, handleLogin } from './utils';
import { useModal } from '../../contexts/modalContext';
import {
  EMAIL_LABEL_TEXT,
  FORGOT_PASSWORD_TEXT,
  LOGIN_ACCOUNT_TEXT,
  LOGIN_NOW_TEXT,
  NOT_REGISTERED_TEXT,
  PASSWORD_TEXT,
  REGISTERED_TEXT,
  WELCOME_BACK_TEXT,
} from './constants';
import InputField from '../InputField';
import Button from '../Button';

interface FormData {
  email: string;
  password: string;
}

const LoginModal: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const { openModal } = useModal();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleLogin(e, formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setFormData);
  };

  return (
    <div className="fixed inset-0 bg-black-1400 bg-opacity-50 flex items-center justify-center">
      <div className="bg-black-1200 p-8 rounded-lg w-full md:w-1/3 relative border-2 border-black-1100">
        <div className="text-center">
          <h2 className="mb-2 text-white-1400">{WELCOME_BACK_TEXT}</h2>
          <h1 className="text-white-1300 text-2xl font-bold mb-6">
            {LOGIN_ACCOUNT_TEXT}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            name="email"
            type="text"
            label={EMAIL_LABEL_TEXT}
            value={formData.email}
            inputPlaceholder="Enter your email or username"
            onChange={handleChange}
          />
          <InputField
            name="password"
            type="password"
            label={PASSWORD_TEXT}
            value={formData.password}
            inputPlaceholder="Enter your password"
            onChange={handleChange}
            labelInline={
              <a href="#" className="text-gray-400 text-sm">
                {FORGOT_PASSWORD_TEXT}
              </a>
            }
          />
          <Button label={LOGIN_NOW_TEXT} type="submit" />
        </form>
        <p className="text-white-1200 mt-4 text-center">
          {NOT_REGISTERED_TEXT}
          <button
            onClick={() => openModal('register')}
            className="text-white-1100"
          >
            {REGISTERED_TEXT}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
