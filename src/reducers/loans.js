import { SET_LOANS } from "../actions/ActionNames";

const initialState = {}

const loansReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOANS:
            return action.payload.loansList
        default: 
            return state;
    };
};

export default loansReducer