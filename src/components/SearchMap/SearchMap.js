import React, { Component } from 'react';
import styles from './Searchmap.module.css';

export default class SearchForm extends Component {
  state = {
    longtitude: '',
    latitude: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { longtitude, latitude } = this.state;
    let long = parseFloat(longtitude);
    let lat = parseFloat(latitude);
    this.props.onSearch(long, lat);
    this.reset();
  };

  reset = () => {
    this.setState({
      longtitude: '',
      latitude: '',
    });
  };

  render() {
    return (
      <div className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            placeholder="Input longtitude..."
            value={this.state.longtitude}
            name="longtitude"
            onChange={this.handleChange}
          />
          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            placeholder="Input latitude..."
            name="latitude"
            value={this.state.latitude}
            onChange={this.handleChange}
          />
          <button className={styles.SearchForm_button}>
            <label className={styles.SearchForm_button_label} />
            Search
          </button>
        </form>
      </div>
    );
  }
}
