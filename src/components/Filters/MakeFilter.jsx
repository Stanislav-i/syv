import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { goToFirstPage, requestFilteredCarsThunk} from 'redux/carsListSlice';
import { Search, SearchForm, SelectWrapper } from './MakeFilter.styled';
import options from './filterData'

const MakeFilter = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!selectedOption) return;
    const userQuery = selectedOption.value;
    
    if (!userQuery)
    {
      dispatch(goToFirstPage())
    }
    if (userQuery) {
      dispatch(requestFilteredCarsThunk(userQuery));}
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SelectWrapper>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? 'grey' : 'none',
              cursor: 'pointer',
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
