import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li onClick={() => onClick(image.id)} className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  tags: "Content from www.pixabay.com"
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    id: PropTypes.number.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ImageGalleryItem;
