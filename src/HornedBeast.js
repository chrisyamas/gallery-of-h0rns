import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      favorites: 0
    }
  }
  handleFavorites = () => {
    this.setState({favorites: this.state.favorites + 1})
  };

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img 
        src={this.props.imageUrl}
        alt={this.props.keyword}/>
        <p>{this.props.description}</p>
        <p>{this.state.favorites} favorites</p>
        <p onClick={this.handleFavorites}>Click to Favorite this beast!</p>
      </article>
    );
  };
};

export default HornedBeast;