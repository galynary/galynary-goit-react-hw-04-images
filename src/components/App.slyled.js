import styled from '@emotion/styled';
import { theme } from '../utils/theme';

export const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${theme.sizes[6]}px;
  padding-bottom: ${theme.sizes[7]}px;
`;
