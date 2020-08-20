import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.4rem;
`;

export const Input = styled.input`
  width: 60px;
  border-radius: 0.5rem;
  border: 1px solid #000;
  outline: 0;
  padding: 5px;
`;
