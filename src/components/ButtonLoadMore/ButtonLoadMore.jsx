import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <Button type="button" onClick={onLoadMore}>
      Load more
    </Button>
  );
};

ButtonLoadMore.propTypes = {
  onLoadMore: PropTypes.func,
};
