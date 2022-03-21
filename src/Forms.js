import React from 'react';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  };
  handleHornFilter=(event) => {
    this.props.handleNumHorns(parseInt(event.target.value));
  }

  render() {
    return (
      <>
      <Form.Group className="horn-filter">
        <Form.Label>Find Beasts by Number of Horns</Form.Label>
        <Form.Select 
          name="selected"
          onChange={this.handleHornFilter}
        >
          <option value=''>Show Every Beast</option>
          <option value='1'>One-Horned Beasts</option>
          <option value='2'>Two-Horned Beasts</option>
          <option value='3'>Three-Horned Beasts</option>
          <option value='100'>ONE-HUNDRED HORNED BEASTS</option>
        </Form.Select>
      </Form.Group>
      </>
    )
  };
};

export default Forms;