import styled from 'styled-components';

export const SearchForm = styled.div`
  display: block;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Col = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled(Col)`
  font-weight: bold;
`;

export const InputFieldWrapper = styled.div`
  padding-top: 10px;
`;

export const ValidationError = styled.div`
  color: #ff0000;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-left: 10px;
`;