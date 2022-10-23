import styled from 'styled-components';

export const StatsSection = styled.section`
  background-color: #eee;
  padding: 30px;
  min-width: 300px;
  text-align: center;
`;

export const Title = styled.h2`
  background-color: #fff;
  padding: 32px;
  margin: 0;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #${() => {
      return Math.floor(Math.random() * 16777215).toString(16);
    }};
`;
