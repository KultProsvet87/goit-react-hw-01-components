import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid grey;
  width: 600px;
  text-align: center;
  border-collapse: collapse;
`;
export const TableHead = styled.thead`
  background: #0b6fa4;
  border-bottom: 5px solid #ffffff;
`;

export const TableTH = styled.th`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  border: 1px solid grey;
  padding: 5px 1px;
  width: 33.3333%;
`;

export const TableTD = styled.td`
  text-align: center;
  border: 1px solid grey;
  padding: 5px 1px;
  width: 33.3333%;
`;

export const TableRow = styled.tr`
  background-color: ${p => (p.index % 2 ? 'grey' : 'white')};
`;
