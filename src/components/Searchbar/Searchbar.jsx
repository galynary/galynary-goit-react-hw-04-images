import React, { Component } from 'react';
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

export class Searchbar extends Component {
  state = { imageName: '' };

  handleChangeInput = evt => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmitForm = evt => {
    const { imageName } = this.state;

    evt.preventDefault();
    if (imageName.trim() === '' || imageName.length < 3) {
      toast.warn('Searching must be no empty and more than 2 letters');
      this.resetForm();
      return;
    }
    this.props.onSubmit(imageName);
    this.resetForm();
  };

  resetForm = () => this.setState({ imageName: '' });

  render() {
    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmitForm}>
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
            value={this.state.imageName}
            onChange={this.handleChangeInput}
          />
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
