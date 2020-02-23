import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    imgId: PropTypes.number.isRequired,
    images: PropTypes.arrayOf.isRequired
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEscButton);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscButton);
  }

  handleEscButton = e => {
    if (e.keyCode === 27) {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { imgId, images } = this.props;

    const fullScreenImg = images.find(image => image.id === imgId);

    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={fullScreenImg.largeImageURL} alt="" role="presentation" />
        </div>
      </div>
    );
  }
}
