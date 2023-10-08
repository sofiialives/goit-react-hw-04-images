import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({onClick, newName, src}) => {
    return (
      <li className={css.item} onClick={onClick}>
        <img src={src} alt={newName} width="300" className={css.image}/>
      </li>
    );
  }
