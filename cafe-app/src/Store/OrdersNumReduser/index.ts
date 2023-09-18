const initialState: number = 0;

type ordersNumReduserType = (state: number, action: {type: string, payload: number}) => number;

export const ordersNumReduser: ordersNumReduserType = (state = initialState, action) =>{
    switch(action.type){
        case "increment":
            return state + action.payload;
        case "decrement":
            return state - action.payload;
        default:
            return state;
    }
};
