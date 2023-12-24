import React from 'react'
import { API_BACKDROP_PATH, API_POSTER_PATH } from '../../utils/constant';

import defaultImage from "../../assets/500x750.png"

export default function ImagePath({ path, type }) {



    const getThumbnail = () => {
        if (path) {
            switch (type) {
                case 'POSTER':
                    return API_POSTER_PATH + path
                case 'BACKDROP':
                    return API_BACKDROP_PATH + path
                default:
                    return defaultImage
            }
        } else {
            return defaultImage
        }
    };
    return (
        <>
            <img
                className="w-full rounded-t-lg"
                // src={API_POSTER_PATH + poster_path}
                src={getThumbnail()}
                alt="poster"
            />
        </>
    )
}
