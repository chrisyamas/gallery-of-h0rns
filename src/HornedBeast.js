import React from 'react';
import Button from 'react-bootstrap/Button';
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
        <div
          className="num-faves"
          >
          {this.state.favorites} 💜 's
        </div>
        <Button
          onClick={this.handleFavorites}
          className="article-button"
          >
             Fave This Beast
        </Button>
      </article>
    );
  };
};

export default HornedBeast;