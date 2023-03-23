import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const SearchbarWrapper = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${theme.sizes[9]}px;
  padding-right: ${theme.sizes[7]}px;
  padding-left: ${theme.sizes[7]}px;
  padding-top: ${theme.sizes[5]}px;
  padding-bottom: ${theme.sizes[5]}px;
  color: ${theme.colors.main};
  background-color: ${theme.colors.mainBgr};
  box-shadow: ${theme.shadows.main};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${theme.colors.main};
  border-radius: ${theme.borders[3]}px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: ${theme.sizes[8]}px;
  height: ${theme.sizes[8]}px;
  border: ${theme.borders[0]}px;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const LabelButton = styled.span`
  position: absolute;
  width: ${theme.sizes[1]}px;
  height: ${theme.sizes[1]}px;
  padding: ${theme.sizes[0]}px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: ${theme.borders[0]}px;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${theme.typography.main};
  border: none;
  outline: none;
  padding-left: ${theme.sizes[4]}px;
  padding-right: ${theme.sizes[4]}px;

  &::placeholder {
    font: inherit;
    font-size: ${theme.typography.secondary};
  }
`;
