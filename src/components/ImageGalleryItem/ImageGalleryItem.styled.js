import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const GalleryItem = styled.li`
  border-radius: ${theme.borders[2]}px;
  box-shadow: ${theme.shadows.secondary};
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
