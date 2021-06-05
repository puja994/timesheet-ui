import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    availabilityResponse: {},
    deleteMsg: "",
    availabilityList: []
}

const availabilitySlice = createSlice({
    name: "availability",
    initialState,
    reducers:{
        requestPending: state => {
            state.isLoading = true
        },
        addAvailabilitySuccess: (state, {payload}) => {
            state.isLoading = false
           state.availabilityResponse = payload
        },
        fetchAvailabilitySuccess: (state, {payload}) => {
            state.isLoading = false
            state.availabilityList = payload.result || []
        },
        deleteAvailabilitySuccess: (state, { payload }) => {
			state.isLoading = false;
			// state.status = payload.status;
			state.deleteMsg = payload.message;
		},
        requestFail: (state, {payload})=>{
            state.isLoading = false
            state.availabilityResponse = payload
           

        }
    }
})
const {reducer, actions} = availabilitySlice

export const {
    requestPending,
    addAvailabilitySuccess,
    fetchAvailabilitySuccess,
    deleteAvailabilitySuccess,
    requestFail
} = actions

export default reducer