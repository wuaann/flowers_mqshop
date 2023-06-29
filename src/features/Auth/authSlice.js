import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state,action)=>{
            state.token = action.payload
        }
    }
})

const {reducer, actions} = authSlice;
export const {login} = actions;
export default reducer;