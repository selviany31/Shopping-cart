import { combineReducers } from "@reduxjs/toolkit";
import contentReducer from './Action'

const rootReducer = combineReducers({
    content: contentReducer,
})

export default rootReducer;