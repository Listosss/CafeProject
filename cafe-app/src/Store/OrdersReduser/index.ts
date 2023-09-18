import { Interface } from "readline";
import { productType } from "../../Types/Types";

type ordersReduserType = (state: productType[], action: { type: string, payload: productType }) => productType[];


const initialState: productType[] = [];

export const ordersReduser: ordersReduserType = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            console.log('delete');
            console.log(action.payload.name);
            console.log(state);
            return state.filter((item)=> item.name!= action.payload.name);
        case "change_count":
            return state.map((item) => {
                if (item.name === action.payload.name) {
                    item.count = action.payload.count;
                    item.total = Number(((item.count as number) * item.price).toFixed(1));
                } return item;
            });
        default:
            return state;
    }
};

