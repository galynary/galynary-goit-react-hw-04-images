import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import loupe from '../../utils/loupe.svg';
import {
  SearchbarWrapper,
  SearchForm,
  SearchButton,
  LabelButton,
  SearchFormInput,
} from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleChangeInput = evt => {
    setImageName(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    if (imageName.trim() === '' || imageName.length < 3) {
      toast.warn('Searching must be no empty and more than 2 letters');
      resetForm();
      return;
    }
    onSubmit(imageName);
    resetForm();
  };

  const resetForm = () => setImageName('');

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmitForm}>
        <SearchButton
          type="submit"
          style={{ backgroundImage: `url(${loupe})` }}
        >
          <LabelButton>Search</LabelButton>
        </SearchButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos..."
          value={imageName}
          onChange={handleChangeInput}
        />
      </SearchForm>
    </SearchbarWrapper>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
