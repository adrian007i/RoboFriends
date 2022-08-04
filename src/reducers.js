import {CHANGE_SEARCH_FIELD} from './constants';
const initialState = {
    searchField :''
}

export const searchRobots = (state = initialState,action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // create a new object with the state and 
            return {...state, searchField: action.payload};

        default:
            return state;
    }
}