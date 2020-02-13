import axios from "axios";
import { SET_LOANS } from "../ActionNames";

const baseUrl = "http://www.mocky.io/v2/5c923b0932000029056bce39"

export const setLoans = (loansList) => {
    return {
        type: SET_LOANS,
        payload: {loansList: loansList}
    };
};

export const getLoans = () => async () => {
    try {
        const response = await axios.get(
            baseUrl
        );
        console.log(response.data);
    } catch (e) {
        console.log("Error", e.message);
    };
};