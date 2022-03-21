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
  handleModal = () => {
    this.props.showModal(this.props.title, this.props.imageUrl, this.props.description);
  }

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img 
          src={this.props.imageUrl}
          alt={this.props.keyword}
          onClick={this.handleModal}
        />
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
        <div
          className="num-horns"
          >
            This beast has {this.props.horns} horns!
          </div>
      </article>
    );
  };
};

export default HornedBeast;