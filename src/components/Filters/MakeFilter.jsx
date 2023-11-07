import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { setFilterValue } from 'redux/carsListSlice';
import { Search, SearchForm, SelectWrapper } from './MakeFilter.styled';

const options = [
  { value: '', label: 'Default' },
  { value: 'Mitsubishi', label: 'Mitsubishi' },
  { value: 'Buick', label: 'Buick' },
  { value: 'Volvo', label: 'Volvo' },
  { value: 'HUMMER', label: 'HUMMER' },
  { value: 'Subaru', label: 'Subaru' },
  { value: 'Nissan', label: 'Nissan' },
  { value: 'Lincoln', label: 'Lincoln' },
  { value: 'Hyundai', label: 'Hyundai' },
  { value: 'MINI', label: 'MINI' },
  { value: 'Bentley', label: 'Bentley' },
  { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
  { value: 'Aston Martin', label: 'Aston Martin' },
  { value: 'Pontiac', label: 'Pontiac' },
  { value: 'Lamborghini', label: 'Lamborghini' },
  { value: 'Audi', label: 'Audi' },
  { value: 'BMW', label: 'BMW' },
  { value: 'Chevrolet', label: 'Chevrolet' },
  { value: 'Chrysler', label: 'Chrysler' },
  { value: 'Kia', label: 'Kia' },
  { value: 'Land', label: 'Land' },
];
const MakeFilter = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if(!selectedOption) return;
    const userQuery = selectedOption.value;
    dispatch(setFilterValue(userQuery));
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SelectWrapper>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'none',
            // width: '500px'
          }),
          option: base => ({
            ...base,
            height: '100%',
            color: 'grey',
          }),
        }}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      </SelectWrapper>
      <Search type="submit">Search</Search>
    </SearchForm>
  );
};

export default MakeFilter;
