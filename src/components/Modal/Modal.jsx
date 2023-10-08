import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ onClose, data }) => {
  useEffect(() => {
    window.addEventListener('keydown', escapeClick);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', escapeClick);
    };
  }, []);

  const bckgClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const escapeClick = evt => {
    if (evt.code === 'Escape') {
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
