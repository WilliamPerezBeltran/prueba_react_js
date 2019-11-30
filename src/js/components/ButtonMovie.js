

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
 import buttomMovie from "./ButtonMovie.css";
// import FormNewMovie from "./FormNewMovie.css";


class ButtomMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button class="Button-movi-button" onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}
 
export default ButtomMovie;