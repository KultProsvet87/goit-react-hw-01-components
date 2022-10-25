import PropTypes from 'prop-types';
import { StatsSection, Title } from './Statistics.styled';
import { Stats } from './StatsList';

export const Statistics = ({ title, statsData }) => {
  return (
    <StatsSection>
      <Title>{title}</Title>
      <Stats data={statsData} />
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statsData: PropTypes.array.isRequired,
};
