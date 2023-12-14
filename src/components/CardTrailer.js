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


    const trailerKey = movieTrailer.find(
        (movie) =>
            movie.name === finalTrailer ||
            movie.name === officialTrailer ||
            movie.type === trailer
    );

    function openModal() {
        setIsOpen(true);
    }


    useEffect(() => {
        id && dispatch(fetchMovieTrailer(id));
        console.log('CardTrailer');
    }, [])
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f037777777777';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <h1>Card Trailer</h1>
            <img
                src= {API_TRAILER_BACKDROP + backdrop_path}
                onClick={openModal}
            // className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            />
            <p> {title} </p>
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
                { trailerKey && <YoutubePlayer videoId={trailerKey.key} />}
            </Modal>
        </div>
    )
}
