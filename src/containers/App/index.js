import React, { Component } from 'react';
import './App.css';
import Modal from 'react-modal'
import Subscribe from '../../components/Subscribe'
import 'bulma/css/bulma.css'


const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    width: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}


class App extends Component {

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
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    Brocoli and Co
                  </a>
                </div>
              </div>
            </nav>
          </div>

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

              <footer className="footer">
                <div className="container">
                  <div className="content has-text-centered">
                    <p className="has-text-primary">
                      <strong>Build in Melbourne</strong>
                    </p>
                  </div>
                </div>
              </footer>
        </section>





      </div>
    );
  }
}

export default App;
