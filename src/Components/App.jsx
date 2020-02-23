import React, { Component } from "react";
import * as imgSearchAPI from "./services/imgSearchAPI";
import SearchBar from "./Searchbar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import NoResult from "./ErrorMessage/NoResult";
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: " ",
    page: 1,
    imgId: null,
    isModalOpen: false
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query, images } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }

    if (images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  }

  fetchImages = (query, page) => {
    this.setState({ isLoading: true });

    imgSearchAPI
      .fetchImages(query, page)
      .then(res =>
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits]
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  handleOpenModal = id => {
    this.setState({ isModalOpen: true, imgId: id });
  };

  handleCloseModal = e => {
    this.setState({
      isModalOpen: false,
      imgId: ""
    });
  };

  handleLoadMore = () => {
    const { page } = this.state;

    this.setState({
      page: page + 1,
      isLoading: true
    });
  };

  render() {
    const { images, isLoading, error, isModalOpen, imgId } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSubmit} />

        {isModalOpen && (
          <Modal
            imgId={imgId}
            images={images}
            onCloseModal={this.handleCloseModal}
          />
        )}
        <ImageGallery images={images} openModal={this.handleOpenModal} />
        {isLoading && <Loader />}
        {error && <ErrorMessage text={error.message} />}
        {images.length === 0 && <NoResult />}
        {images.length >= 12 && <Button onLoadMore={this.handleLoadMore} />}
      </div>
    );
  }
}
