export const getUserRole = () => {
  const storedRole = localStorage.getItem('userRole');
  return storedRole ? JSON.parse(storedRole) : null;
};

export const setUserRole = (role: string) => {
  localStorage.setItem('userRole', JSON.stringify(role));
};
