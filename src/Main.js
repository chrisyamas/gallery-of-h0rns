import React from 'react';
import HornedBeast from './HornedBeast';
import Rataxes from './rataxes.jpg';
import Charuni from './charuni.png';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast
        title="Lord Rataxes"
        imageUrl={Rataxes}
        description="Monarch de Jure of Rhinoland kingdom in fictional Babar universe."
        keyword="Picture of Lord Rataxes looking mischevious"/>
        <HornedBeast
        title="Charlie The Unicorn"
        imageUrl={Charuni}
        description="Tragic eponymous character of disturbing 2005 Flash animated short film."
        keyword="Picture of Charlie The Unicorn looking irritated"/>
      </>
    )
  }
}

export default Main;