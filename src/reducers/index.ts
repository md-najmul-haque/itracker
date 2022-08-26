import { combineReducers } from "@reduxjs/toolkit"
// import listReducer from "./listReducer"
import reduxReducer from "../Assets/reducers/reduxReducer"
export default combineReducers({
    // lists: listReducer,
    reducer: reduxReducer
})