import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.base.darkBg};
`;

export const MainContent = styled.View`
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.dimensions.navBar};
`;

export const DefaultText = styled.Text`
  color: white;
  font-size: 16px;
`;
