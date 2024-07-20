export const handleInputChange = (e, setterFn) => {
  const { name, value } = e.target;
  setterFn((prev) => ({ ...prev, [name]: value }));
};

export const handleLogin = (e, data) => {
  e.preventDefault();
  console.log(data);
};

export const handleRegister = (e, data) => {
  e.preventDefault();
  console.log(data);
};