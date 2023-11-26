import { API_URL } from "../../utils/constant"

export const fetchAllMovies = () =>{
    return(dispatch) => {
        fetch(` ${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1  `)
    }
}