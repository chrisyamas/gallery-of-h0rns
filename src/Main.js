import React from 'react';
import HornedBeast from './HornedBeast';
import Forms from './Forms.js';
import './Main.css';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      beasts: this.props.data,
      horns: 0,
    }
  }

  handleNumHorns=(value) => {
    let beastsHorns = this.props.data.filter(beast => beast.horns===value)
    this.setState({
      beasts: beastsHorns
    });
  };

  render() {
    let beasts=this.state.beasts.map((beast,idx) => {
      return (
        <HornedBeast
        title = {beast.title}
        imageUrl = {beast.image_url}
        keyword = {beast.keyword}
        description = {beast.description}
        key = {idx}
        showModal={this.props.showModal}
        beast={beast}
        horns={beast.horns}
        />
      );
    });
    return (
      <>
        <Forms
          handleNumHorns={this.handleNumHorns}
        />
        <main>
          {beasts}
        </main>  
      </>
    );
  };
};


export default Main;