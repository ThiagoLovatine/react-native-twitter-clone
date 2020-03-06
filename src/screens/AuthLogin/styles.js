import styled from 'styled-components/native';
import IconMaster from '../../components/IconMaster';
import colors from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  padding: 60px 16px 16px 16px;
  background-color: white;
  justify-content: flex-start;
`;

export const MainContent = styled.View``;

export const TwitterIcon = styled(IconMaster)`
  color: ${colors.primary};
  font-size: 40px;
  align-self: center;
`;
