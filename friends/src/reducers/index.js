import { 
    START_FETCHING, 
 } from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: "",
    id: ""
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: '',
            };
        default:
            return state;
    }
};

export default reducer;