// import axios
import axios from "axios";

// action_creators
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const fetchFriends = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axios
        .get(`http://localhost:5000`)
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

// export const axiosWithAuth = () => {
//     const token = store.getItem('token');
//     // return an instance of axios
//     return axios.create({
//         basURL: "http://localhost:5000",
//         headers: {
//             Authorization: token
//         }
//     })
// }

// export const START_POSTING = 'START_POSTING';
// export const POST_SUCCESS = 'POST_SUCCESS';
// export const POST_FAILURE = 'POST_FAILURE';
// export const postFriend = (smurf) => dispatch => {
//     dispatch({ type: START_POSTING });

//     axios
//         .post(`http://localhost:5000`, smurf)
//         .then(res => dispatch({ 
//             type: POST_SUCCESS, payload: res.data
//         }))
//         .catch(err => dispatch({ 
//             type: POST_FAILURE, 
//             // payload: err.response 
//         }))
        
// }