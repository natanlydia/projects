import {createStore } from "redux";
import cartReducers from "./reducer";


const store = createStore(cartReducers);

export default store;