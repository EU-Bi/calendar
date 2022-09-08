import { PLUS_MONTH, MINUS_MONTH } from '../actions/selectedMonth'
import { SELECT_DATE } from '../actions/selectedDate'

const initialState = new Date();


export default (state = initialState, action) => {

    switch (action.type) {
     
        case PLUS_MONTH: return new Date(state.setMonth(state.getMonth() + 1));
        case MINUS_MONTH: return  new Date(state.setMonth(state.getMonth() - 1));
        case SELECT_DATE: return new Date(action.value)
        default: return state;
    }
}