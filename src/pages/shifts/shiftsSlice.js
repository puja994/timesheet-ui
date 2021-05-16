import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    shiftResponse: {},
    shiftsList: []
}

const shiftsSlice = createSlice({
    name: "shifts",
    initialState,
    reducers:{
        requestPending: state => {
            state.isLoading = true
        },
        addShiftSuccess: (state, {payload}) => {
            state.isLoading = false
           state.shiftResponse = payload
        },
        fetchShiftSuccess: (state, {payload}) => {
            state.isLoading = false
            state.shiftsList = payload.result || []
        },
        requestFail: (state, {payload})=>{
            state.isLoading = false
            state.shiftResponse = payload
           

        }
    }
})
const {reducer, actions} = shiftsSlice

export const {
    requestPending,
    addShiftSuccess,
    fetchShiftSuccess,
    requestFail
} = actions

export default reducer