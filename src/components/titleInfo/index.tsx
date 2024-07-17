import Icon from '@/components/icon';
import { useTheme } from 'styled-components/native';
import { Container, ExtraInfo, ExtraInfoItem, Line, Row, Text, Title } from './styles';

interface TitleInfoProps {
  genres: string[];
  title: string;
  ageRating: string;
  rating: number;
  runtime?: number;
}

const TitleInfoComponent: React.FC<TitleInfoProps> = ({ genres, title, ageRating, rating, runtime }) => {
  const theme = useTheme();

  return (
    <Container>
      {/* SEPARATOR LINE */}
      <Line />

      <ExtraInfo>
        {/* Genres */}
        <Row>{!!genres?.length && genres.map((genre) => <Text key={genre}>{genre}</Text>)}</Row>

        {/* TITLE */}
        <Title numberOfLines={1}>{title}</Title>

        {/* EXTRA INFO */}
        <Row>
          {/* AGE RATING */}
          <Text>{ageRating}</Text>

          {/*  RATING */}
          <ExtraInfoItem>
            <Icon
              name="Star"
              color={theme.base.gold}
              fill={theme.base.gold}
              size={15}
            />
            <Text>{rating}</Text>
          </ExtraInfoItem>

          {/*  RUNTIME */}
          <ExtraInfoItem>
            <Icon
              name="Clock5"
              color={'#fff'}
              size={15}
            />
            <Text>{runtime}</Text>
          </ExtraInfoItem>
        </Row>
      </ExtraInfo>
    </Container>
  );
};

export default TitleInfoComponent;
