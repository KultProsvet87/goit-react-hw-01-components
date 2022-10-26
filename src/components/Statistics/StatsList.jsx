import { StatItem, StatsList } from './Statistics.styled';
import PropTypes from 'prop-types';

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

Stats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
