import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  overlayRef = createRef();

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
    const { current } = this.overlayRef;

    if (current === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { imgId, images, onCloseModal } = this.props;

    const fullScreenImg = images.find(image => image.id === imgId);

    return (
      <div
        className={styles.Overlay}
        ref={this.overlayRef}
        onClick={onCloseModal}
      >
        <div className={styles.Modal}>
          <img src={fullScreenImg.largeImageURL} alt="" role="presentation" />
        </div>
      </div>
    );
  }
}
