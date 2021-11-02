import styled from 'styled-components';

export const InputField = styled.input`
  background-color: #ffffff;
  border: 1px solid #cecece;
  height: 47px;
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
  display: block;
  color: #000000;
  font-family: 'Source Sans Pro';
  &::-webkit-input-placeholder {
    /* Edge */
    color: #000000;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #000000;
  }

  &::placeholder {
    color: #000000;
  }

  &.error {
    border: solid 1px red;
  }

  &:disabled {
    background: #ddd;
  }
`;
