import { InputField } from './styles';
import React from 'react';

export const Input = (props) => {
  const {
    type,
    onChange,
    ...additionalProps
  } = props;

  const onChangeWrapper = (e) => {
    e.preventDefault();
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };

  return <InputField type={props.type} onChange={onChangeWrapper} {...additionalProps} />;
};

export default Input;
