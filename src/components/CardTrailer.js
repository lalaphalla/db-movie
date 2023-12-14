import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import YoutubePlayer from "./YoutubePlayer";
import { API_TRAILER_BACKDROP } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieTrailer } from "../redux/actions/movieActions";

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

export default function CardTrailer({ id, title, backdrop_path }) {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  let { movieTrailer } = useSelector((state) => state.movieR);

  const finalTrailer = "Final Trailer";
  const officialTrailer = "Official Trailer";
  const trailer = "Trailer";

  const trailerKey = movieTrailer && movieTrailer.find(
    (movie) =>
      movie.name === finalTrailer ||
      movie.name === officialTrailer ||
      movie.type === trailer,
  );

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    id && dispatch(fetchMovieTrailer(id));
    id && console.log("CardTrailer", id);
  }, []);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f037777777777';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      className="relative my-4 cursor-pointer 
    overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-300  "
    >
      {/* focus:outline-none text-white bg-white  focus:ring-2
    focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 */}

      <img
        src={API_TRAILER_BACKDROP + backdrop_path}
        className="
         overflow-hidden
         transition duration-300 ease-in-out
         hover:scale-105
         "
        onClick={openModal}
      />
      <div className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 transform transition duration-300 ease-in-out">
        <span onClick={openModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="h-14 w-14 hover:fill-red-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </span>
      </div>
      <p className="text-gray-200 mt-6 text-xl"> {title} </p>
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
        {trailerKey && <YoutubePlayer videoId={trailerKey.key} />}
      </Modal>
    </div>
  );
}
