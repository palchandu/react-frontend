import React,{Component} from 'react';
import {Modal} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import SlideShow from 'react-slideshow-ui';

import './modal.css';
class MyLargeModal extends React.Component {
    constructor(props,context){
        super(props,context);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.state = {
          show: false,
        };
    }

    handleShow() {
      this.setState({ show: true });
    }

    handleHide() {
      this.setState({ show: false });
    }

    render() {
      return (
          <React.Fragment>
            <ButtonToolbar>
          <a className="img-zoom"  onClick={this.handleShow}>
          </a>
  
          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-dialog"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
               Project Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className=" col-lg-12">
              <SlideShow
               
                images={this.props.images}
                withTimestamp={true}
                pageWillUpdate={(index, image) => {
                  console.log(`Page Update! index: ${index}, image: ${image}`);
                }}
              />
              </div>
            
        
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
        </React.Fragment>
      );
    }
  }

  export default MyLargeModal;