import React, { Component } from 'react';
import './MealBox.scss';

class MealBox extends Component {
  render() {
    const { name, calories, image, quantity } = this.props;
    return (
      <div className="media">
        <img
          src={image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '10em' }}
          alt={name}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{name}</h5>
          <small>{calories} cal</small>
        </div>
        <form className="row align-self-center">
          <input className="form-control col-9" type="number" value={quantity} />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
