import { useState, useEffect, useRef } from 'react';
//import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppWrapper } from './App.slyled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { API } from '../services/api';
import { Loader } from './Loader/Loader';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';
import { Modal } from './Modal/Modal';

export function App() {
  const PER_PAGE = useRef(12);

  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [largeImg, setLargeImg] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (!imageName) {
      return;
    }

    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await API.getImages(imageName, page, PER_PAGE);
        const { hits, totalHits } = data;
        setImages(images => [...images, ...hits]);
        setVisibleBtn(page < Math.ceil(totalHits / PER_PAGE));
        if (page === 1) {
          toast.success(`Hooray! We found ${totalHits} images`);
          window.scroll(0, 0);
        }
      } catch {
        toast.error(
          `Sorry, there are no images "${imageName}". Please try again.`
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData(imageName, page);
  }, [imageName, page]);

  const onSubmitForm = value => {
    if (value !== imageName) {
      setImageName(value);
      setPage(1);
      setImages([]);
    } else {
      toast.warn('The new search must be different from the current search');
    }
  };

  const onLoadMore = () => setPage(state => state + 1);

  const onSelectedImage = ({ largeImageURL, tags }) => {
    setLargeImg(largeImageURL);
    setTags(tags);
  };
  const onCloseModal = () => setLargeImg('');

  return (
    <AppWrapper>
      <Searchbar onSubmit={onSubmitForm} />
      {loading && <Loader />}
      <ImageGallery images={images} onSelected={onSelectedImage} />
      {visibleBtn && (
        <ButtonLoadMore loading={loading} onLoadMore={onLoadMore} />
      )}
      {largeImg && (
        <Modal largeImg={largeImg} tags={tags} onCloseModal={onCloseModal} />
      )}
      <ToastContainer autoClose={3000} />
    </AppWrapper>
  );
}
