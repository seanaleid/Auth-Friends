// import axios
import axios from "axios";

// action_creators
export const START_FETCHING = 'START_FETCHING';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

// export const START_POSTING = 'START_POSTING';
// export const POST_SUCCESS = 'POST_SUCCESS';
// export const POST_FAILURE = 'POST_FAILURE';
// export const postSmurf = (smurf) => dispatch => {
//     dispatch({ type: START_POSTING });

//     axios
//         .post(`http://localhost:3333/smurfs`, smurf)
//         .then(res => dispatch({ 
//             type: POST_SUCCESS, payload: res.data
//         }))
//         .catch(err => dispatch({ 
//             type: POST_FAILURE, 
//             // payload: err.response 
//         }))
        
// }