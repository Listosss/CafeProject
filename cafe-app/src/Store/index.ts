import { combineReducers, createStore} from "redux";
import {ordersNumReduser} from "./OrdersNumReduser";
import {ordersReduser}from "./OrdersReduser";
import { Interface } from "readline";
import { productType } from "../Types/Types";

export type storeType = {
    orders: productType[],
    ordersNum: number,
}

export const store = createStore(combineReducers({orders: ordersReduser, ordersNum: ordersNumReduser}));