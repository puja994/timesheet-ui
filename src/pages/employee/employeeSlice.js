import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    employeeResponse: {},
    employeeList: []
}

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {

        requestPending: state => {
            state.isLoading = true
        },
        addEmployeeSuccess: (state, {payload})=> {
            state.isLoading = false
            state.employeeResponse = payload
        },
        requestFail: (state, {payload})=> {
            state.isLoading = false
            state.employeeResponse = payload
        }

    }
})
const {reducer, actions} = employeeSlice

export const {
    requestPending,
    addEmployeeSuccess,
    requestFail
} = actions

export default reducer