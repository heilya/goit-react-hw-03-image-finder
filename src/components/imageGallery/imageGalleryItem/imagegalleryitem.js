import { Component } from 'react';
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
      };
      openModal = () => this.setState({ isModalOpen: true });

      closeModal = () => this.setState({ isModalOpen: false });
      render(){
        const {smallImage,largeImage, description} = this.props;
        return(
            <><li className="gallery-item">
            <img src={smallImage} alt={description} onClick={this.openModal}/>
            </li>
         <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div className="overlay">
          <div className="modal">
          <img src={largeImage} alt={description} />
          </div>
          </div>
        </Modal></>
        );
      };
};