import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 250px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

export const Wrapper = styled(LinearGradient)`
  flex: 1;
`;

export const TitleInfoContainer = styled.View`
  flex: 1;
  padding: 15px 25px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
