import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const Item = ({ webformatURL, largeImageURL, tags, onSelected }) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        onClick={() => onSelected({ largeImageURL, tags })}
      />
    </GalleryItem>
  );
};

Item.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onSelected: PropTypes.func,
};
