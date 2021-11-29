import { types } from "../types/types";

// state = {
//     uid = 'sdf8s4b1f3b16wrfv8fev4',
//     displayName = 'Daniel Andrés Duque'
// }


export const authReducer = (state= {}, action) => {
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        case types.logout:
            return{
            };
    
        default:
            return state;
    }
}