import TitleInfoComponent from '@/components/titleInfo';
import { FC } from 'react';
import { ImageBackground } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, TitleInfoContainer, Wrapper } from './styles/global';

interface HeroProps {
  title: string;
  releaseDate?: string;
  image: string;
  genres: string[];
  runtime?: number;
  ageRating: string;
  rating: number;
}

const Hero: FC<HeroProps> = (props) => {
  const theme = useTheme();
  return (
    <Container>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Wrapper
          colors={[theme.base.darkBg, 'transparent']}
          locations={[0.01, 0.6]}
          end={{ x: 1.5, y: 0 }}
          start={{ x: 0, y: 2 }}
        >
          <TitleInfoContainer>
            <TitleInfoComponent {...props} />
          </TitleInfoContainer>
        </Wrapper>
      </ImageBackground>
    </Container>
  );
};

export default Hero;
