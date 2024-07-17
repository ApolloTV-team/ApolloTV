import { DefaultText } from '@/styles/global';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 23px;
`;

export const Line = styled.View`
  width: 2px;
  height: 100%;
  background-color: white;
`;

export const ExtraInfo = styled.View`
  flex-direction: column;
  gap: 1px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const Text = styled(DefaultText)`
  font-size: ${({ theme }) => theme.typography.sm}px;
`;

export const Title = styled(DefaultText)`
  font-size: ${({ theme }) => theme.typography['3xl']}px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const ExtraInfoItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;
