import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWrapper } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImg, tags, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        console.log('close');
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackDrop = evt => {
    const clickBackdrop = evt.target.id;
    if (clickBackdrop === 'backdrop') {
      onCloseModal();
    }
  };

  return createPortal(
    <Backdrop id="backdrop" onClick={handleBackDrop}>
      <ModalWrapper>
        <img src={largeImg} alt={tags} />
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func,
};
