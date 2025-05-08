export const getUser = (storageKey: string) => {
  const storedRole = localStorage.getItem(storageKey);
  return storedRole ? JSON.parse(storedRole) : null;
};

export const setUser = (storageKey: string, data: string | boolean) => {
  localStorage.setItem(storageKey, JSON.stringify(data));
};
