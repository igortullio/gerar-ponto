import styled from 'styled-components';

export interface PropsTr {
  header?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const TableContainer = styled.div`
  width: 60%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr<PropsTr>`
  background-color: ${props => (props.header ? '#323232' : '#eef4ff')};
  color: ${props => (props.header ? '#fff' : '#323232')};

  :hover {
    background-color: #ddd;
  }
`;

export const Th = styled.th`
  text-align: center;
  padding: 8px;
`;

export const Td = styled.td`
  border: 1px dotted #e7ebed;
  text-align: center;
  padding: 8px;
`;

export const Actions = styled.div`
  height: 100%;
  width: 40%;
`;

export const Generate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export const Form = styled.form`
  padding: 0 30%;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #000;
  outline: 0;
  padding: 5px;
`;
