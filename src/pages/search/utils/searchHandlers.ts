export const handleSearchChange = (setSearchValue: React.Dispatch<React.SetStateAction<string>>) => (value: string) => {
  setSearchValue(value);
};

export const handleSearchIconClick =
  (setSubmittedSearchValue: React.Dispatch<React.SetStateAction<string>>, searchValue: string) => () => {
    setSubmittedSearchValue(searchValue);
  };

export const handleKeyDown =
  (setSubmittedSearchValue: React.Dispatch<React.SetStateAction<string>>, searchValue: string) =>
  (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSubmittedSearchValue(searchValue);
    }
  };
