import React from 'react';

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setterFn: React.Dispatch<React.SetStateAction<any>>
): void => {
  const { name, value } = e.target;
  setterFn((prev: any) => ({ ...prev, [name]: value }));
};

export const handleLogin = (
  e: React.FormEvent<HTMLFormElement>,
  data: any
): void => {
  e.preventDefault();
  console.log(data);
};

export const handleRegister = (
  e: React.FormEvent<HTMLFormElement>,
  data: any
): void => {
  e.preventDefault();
  console.log(data);
};
