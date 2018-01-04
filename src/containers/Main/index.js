import React, { Component } from 'react';
import Modal from 'react-modal'
import Subscribe from '../../components/Subscribe'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import 'bulma/css/bulma.css'


const customStyles = {
  content: {
    top: '50%',
    height: '90%',
    width: '90%',
    maxWidth: '430px',
    maxHeight: '400px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}


export default class App extends Component {

  constructor(props) {
   super(props)

   this.state = {
     modalIsOpen: false
   }
 }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <section className="hero is-info is-fullheight">
          <Header />
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-6 is-offset-3">
                <h1 className="title">
                  A better way to enjoy every day.
                </h1>
                <h2 className="subtitle">
                   Be the first to know when we launch
                </h2>
                  <a className="bd-tw-button button is-danger" onClick={this.openModal} >
                    <span className="icon">
                      <i className="fa fa-paper-plane" />
                    </span>
                    <span className="is-capitalized">Request an invite</span>
                  </a>

                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                  >
                    <span className="icon is-pulled-right" onClick={this.closeModal}>
                      <i className="fa fa-window-close" aria-hidden="true" />
                    </span>
                    <Subscribe closeModalRequest={this.closeModal} />
                  </Modal>
                  </div>
                </div>
              </div>

              <Footer />
        </section>
      </div>
    );
  }
}
