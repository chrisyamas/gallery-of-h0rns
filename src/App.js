import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showModal:false,
    }
  }
  hideModal=() => {
    this.setState({
      showModal:false,
    })
  }
  showModal=(title,imageUrl,description) => {
    this.setState({
      showModal:true,
      title:title,
      imageUrl:imageUrl,
      description:description,
    });
  }
  
  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          showModal={this.showModal}
        />
        <Footer/>
        <SelectedBeast
        show={this.state.showModal}
        hideModal={this.hideModal}
        title={this.state.title}
        imageUrl={this.state.imageUrl}
        description={this.state.description}
        />
      </>
    )
  }
}

export default App;
