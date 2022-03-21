import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';


class Main extends React.Component {
  render() {
    let beasts=this.props.data.map((beast,idx) => {
      return (
        <HornedBeast
        title = {beast.title}
        imageUrl = {beast.image_url}
        keyword = {beast.keyword}
        description = {beast.description}
        key = {idx}
        showModal={this.props.showModal}
        />
      );
    });
    return (
      <main>
        {beasts}
      </main>
    );
  };
};


export default Main;