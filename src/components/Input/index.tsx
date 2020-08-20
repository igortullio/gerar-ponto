import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<Props> = ({ label, name, ...rest }) => {
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} type="number" autoComplete="off" {...rest} />
    </S.Container>
  );
};

export default Input;
