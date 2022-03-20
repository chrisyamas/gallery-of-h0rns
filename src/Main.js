import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';


class Main extends React.Component {
  render() {
    let beasts=[];
    this.props.data.forEach((beast,idx) => {
      beasts.push(
        <HornedBeast
        title = {beast.title}
        imageUrl = {beast.image_url}
        keyword = {beast.keyword}
        description = {beast.description}
        key = {idx}
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