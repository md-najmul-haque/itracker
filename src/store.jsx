import { configureStore } from "@reduxjs/toolkit"
import reduxReducer from "./Assets/reducers/reduxReducer";
const store = configureStore({ reducer: reduxReducer });

export default store;