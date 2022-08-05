import {CHANGE_SEARCH_FIELD} from './constants';
const initialState = {
    searchField :''
}

export const searchRobots = (state = initialState,action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // Returns a new object with the updated search value payload 
            return {...state, searchField: action.payload};

        default:
            return state;
    }
}