import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/index'


const reducer = () => { }

const store = configureStore({ reducer: rootReducer });

export default store; 