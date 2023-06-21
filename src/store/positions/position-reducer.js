import {ADD_POSITIONS} from "./position-actions";

const initialState=[]
export const positionReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_POSITIONS:{
            return action.positions;
        }
        default:{
            return state;
        }
    }
}