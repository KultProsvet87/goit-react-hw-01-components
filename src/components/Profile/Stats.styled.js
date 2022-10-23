import styled from 'styled-components';

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const StatsItem = styled.li`
  width: 100px;
  height: 100px;
  border: 1px solid grey;
  background-color: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  color: grey;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
