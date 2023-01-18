import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    loading:boolean,
    user:any
    allUsers:any,
    userData:any,
    isLoggedIn:boolean

}

const initialState:AuthState = {
    loading:true,
    isLoggedIn:false,
    user:null,
    userData:[],
    allUsers:[],
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        currentUser: (state,action) => {
            state.loading = false
            state.userData = action.payload
           
        },
        loggedInUser:(state,action) => {
            state.user = action.payload
            state.isLoggedIn = true
        },
    }
    
}) 


export const {
    currentUser,
    loggedInUser,
} = authSlice.actions

export default authSlice.reducer
