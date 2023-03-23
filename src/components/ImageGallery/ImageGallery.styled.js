import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - ${theme.sizes[8]}px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${theme.sizes[6]}px;
  margin-top: ${theme.sizes[0]}px;
  margin-bottom: ${theme.sizes[0]}px;
  padding: ${theme.sizes[0]}px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
