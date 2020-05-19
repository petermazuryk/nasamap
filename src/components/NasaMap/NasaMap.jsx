import React, { Component } from 'react';
import SearchForm from '../SearchMap/SearchMap';
import * as apiNasa from '../../services/image-api';
import ImageNasa from '../ImageNasa/ImageNasa';

class NasaMap extends Component {
  state = {
    longitude: null,
    latitude: null,
    image: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { longitude, latitude, date } = this.state;
    if (
      prevState.longitude !== this.state.longitude &&
      prevState.latitude !== this.state.latitude
    ) {
      apiNasa.fetchImg(longitude, latitude, date).then(data => {
        this.setState({ image: data });
      });
      console.log(longitude, latitude);
    }
  }

  coordinate = (longitude, latitude) => {
    if (longitude && latitude) {
      this.setState({
        longitude: longitude,
        latitude: latitude,
      });
    }
  };

  render() {
    const { longitude, latitude, image } = this.state;
    return (
      <div>
        <SearchForm onSearch={this.coordinate} />
        <p>Longitude: {longitude}</p>
        <p>Latitude: {latitude}</p>
        <ImageNasa image={image} />
      </div>
    );
  }
}

export default NasaMap;
