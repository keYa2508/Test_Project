import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";
import action from "../action";

const GlobalSlice = createSlice({
    name:"global",
    initialState,
    reducers : {
        setPersonDetails: (state, action) => {
            state.personDetils = action.payload
        },
        resetStatic : () => initialState
    }
})

const action = GlobalSlice.actions
const reducers = GlobalSlice.reducer
export {action, reducers}