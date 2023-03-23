import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const Button = styled.button`
  padding: ${theme.sizes[4]}px ${theme.sizes[6]}px;
  border-radius: ${theme.borders[2]}px;
  background-color: ${theme.colors.mainBgr};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  margin: auto;
  color: #fff;
  border: ${theme.borders[0]};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${theme.typography.secondary};
  line-height: ${theme.sizes[7]}px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: ${theme.shadows.secondary};

  &:hover,
  &:focus {
    background-color: ${theme.colors.hover};
  }
`;
