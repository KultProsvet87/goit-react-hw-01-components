import { StatItem, StatsList } from './Statistics.styled';

export const Stats = ({ data }) => {
  return (
    <StatsList>
      {data.map(item => {
        const { id, label, percentage } = item;
        return (
          <StatItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatItem>
        );
      })}
    </StatsList>
  );
};
