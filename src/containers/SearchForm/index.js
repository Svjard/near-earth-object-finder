import React, { useState } from 'react';
import { Input } from '../../components/Input';
import useGlobalState from '../../state';

import * as S from './styles';

const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

function asMilliseconds(date) {
  return new Date(date).getTime();
}

export const SearchForm = () => {
  const { state, setStartDate, setEndDate, setSearch } = useGlobalState();
  const [error, setError] = useState(null);

  const validate = (fieldName, fieldValue) => {
    const newDate = asMilliseconds(fieldValue);
    if (fieldName === 'startDate') {
      if (newDate > asMilliseconds(state.endDate)) {
        setError('Start date must be less than or equal to the end date');
      } else if (asMilliseconds(state.endDate) - newDate > SEVEN_DAYS_IN_MS) {
        setError('Total range of start to end must not exceed 7 days');
      } else {
        setError(null);
      }

      setStartDate(fieldValue);
    } else if (fieldName === 'endDate') {
      if (newDate < asMilliseconds(state.startDate)) {
        setError('End date must be greater than or equal to the start date');
      } else if (newDate - asMilliseconds(state.startDate) > SEVEN_DAYS_IN_MS) {
        setError('Total range of start to end must not exceed 7 days');
      } else {
        setError(null);
      }

      setEndDate(fieldValue);
    }
  }

  return (
    <S.SearchForm>
      <S.Col>
        Change the start and end date below to search for near earth objects
        during that timeframe.
      </S.Col>
      <S.Row>
        <S.Label to="startDate">Start Date:</S.Label>
        <S.InputFieldWrapper>
          <Input type="date" name="startDate" onChange={(value) => validate('startDate', value)} value={state.startDate} />
        </S.InputFieldWrapper>
        <S.Label to="">End Date:</S.Label>
        <S.InputFieldWrapper>
          <Input type="date" name="endDate" onChange={(value) => validate('endDate', value)} value={state.endDate} />
        </S.InputFieldWrapper>
      </S.Row>
      <S.ValidationError>
        {error || ''}
      </S.ValidationError>
      <S.Row>
        <S.Label to="search">Search:</S.Label>
        <S.InputFieldWrapper>
          <Input type="text" name="search" onChange={(s) => { console.log('s', s); setSearch(s); }} value={state.search} />
        </S.InputFieldWrapper>
      </S.Row>
    </S.SearchForm>
  );
};

export default SearchForm;
