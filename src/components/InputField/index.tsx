import React, { ChangeEvent, ReactNode } from 'react';
import Eye from '../../assets/eye.svg';

interface InputFieldProps {
  name: string;
  type: string;
  label: string;
  value: string;
  inputPlaceholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
  inputClassName?: string;
  labelInline?: ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  label,
  value,
  inputPlaceholder,
  onChange,
  labelClassName = '',
  inputClassName = '',
  labelInline,
}) => {
  return (
    <div>
      {labelInline ? (
        <div className="flex justify-between">
          <label className={`block text-white-1100 mb-1 ${labelClassName}`}>
            {label}
          </label>
          {labelInline}
        </div>
      ) : (
        <label className={`block text-gray-400 mb-1 ${labelClassName}`}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={inputPlaceholder}
          className={`w-full bg-black-1200 rounded px-3 py-2 text-white border-2 border-black-1100 ${inputClassName}`}
        />
        {type === 'password' && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <img src={Eye} alt="eye password" />
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
