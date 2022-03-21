import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.hideModal}
      >
        <Modal.Header closeButton>{this.props.title}</Modal.Header>
        <Modal.Body>
          <img
            src={this.props.imageUrl}
            alt={this.props.title}
            >
          </img>
          <p>{this.props.description}</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;