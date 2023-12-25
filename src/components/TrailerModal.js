import React from "react";
import Modal from "react-modal";
import YoutubePlayer from "./YoutubePlayer";

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: "49%",
    left: "49%",
    right: "auto",
    bottom: "auto",
    marginRight: "-51%",
    transform: "translate(-51%, -50%)",
    padding: "0",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export default function TrailerModal({ videoId }) {
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
      <button
        onClick={openModal}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Play Trailer
      </button>
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
        <YoutubePlayer videoId={videoId} />
      </Modal>
    </div>
  );
}
