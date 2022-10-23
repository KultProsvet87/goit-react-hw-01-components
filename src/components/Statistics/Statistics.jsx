import { StatsSection, Title } from './Statistics.styled';
import { Stats } from './StatsList';

export const Statistics = ({ title, statsData }) => {
  return (
    <StatsSection>
      <Title class="title">Upload stats</Title>
      <Stats data={statsData} />
    </StatsSection>
  );
};
