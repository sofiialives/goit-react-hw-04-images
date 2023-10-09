import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ onClose, data }) => {
  useEffect(() => {
    const escapeClick = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', escapeClick);
    return () => {
      window.removeEventListener('keydown', escapeClick);
    };
  }, [onClose]);

  const bckgClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };


  return (
    <div className={css.overlay} onClick={bckgClick}>
      <div className={css.modal}>
        <img src={data} alt="descr" className={css.imgModal} />
      </div>
    </div>
  );
};
