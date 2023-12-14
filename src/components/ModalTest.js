import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import YoutubePlayer from './YoutubePlayer';

const customStyles = {
  content: {
    top: '49%',
    left: '49%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-51%',
    transform: 'translate(-51%, -50%)',
    padding: '0',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export default function ModalTest() {

  const [modalIsOpen, setIsOpen] = React.useState(false); 

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f037777777777';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Trailer</button>
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h1> */}
        {/* <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
        <YoutubePlayer videoId="RjNcTBXTk4I" />
      </Modal>
    </div>
  );
} 
 