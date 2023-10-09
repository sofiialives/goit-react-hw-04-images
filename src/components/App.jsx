import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { fetchImages } from 'services/Api';

export const App = () => {
  const [picture, setPicture] = useState('');
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    data: null,
  });
  const [page, setPage] = useState(1);

  const formSubmit = picture => {
    setPicture(picture);
    setPage(1);
    setPics([]);
  };

  useEffect(
    prevState => {
      if (prevState !== picture || prevState !== page) {
        setLoading(true);
        fetchImages(picture, page)
          .then(data => {
            setPics(prevState => [...prevState, ...data.hits]);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          })
          .finally(() => setLoading(false));
      }
    },
    [picture, page]
  );

  const openModal = largeImageURL => {
    setModal({
      isOpen: true,
      data: largeImageURL,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      data: null,
    });
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <Searchbar picImg={formSubmit} />
      <ImageGallery pics={pics} onImageClick={openModal} />
      {loading && <Loader />}
      {modal.isOpen && (
        <Modal data={modal.data} onClose={closeModal} alt="descr" />
      )}
      {pics.length >= 12 && <Button loadMore={loadMore} />}
    </div>
  );
};
