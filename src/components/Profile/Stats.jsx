import { Label, Quantity, StatsItem, StatsList } from './Stats.styled';

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <StatsItem>
        <Label className="label">Followers</Label>
        <Quantity className="quantity">{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label className="label">Views</Label>
        <Quantity className="quantity">{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label className="label">Likes</Label>
        <Quantity className="quantity">{likes}</Quantity>
      </StatsItem>
    </StatsList>
  );
};
