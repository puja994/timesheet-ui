import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    employeeResponse: {},
    deleteMsg: "",
    employeeList: [],
    selectedEmployee: {},
    updateEmployeeResponse: {}
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
        fetchEmployeeSuccess: (state, {payload}) => {
            state.isLoading = false
            state.employeeList = payload.result || []
        },
        updateEmployeeSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.updateEmployeeResponse = payload;
		},

		toggleEmployeeEditModal: state => {
			state.show = !state.show;
			if (!state.show) {
				state.updateEmployeeResponse = {};
			}
		},

		selectAEmployee: (state, { payload }) => {
			state.selectedEmployee = payload;
		},
        deleteEmployeeSuccess: (state, { payload }) => {
			state.isLoading = false;
			// state.status = payload.status;
			state.deleteMsg = payload.message;
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
    fetchEmployeeSuccess,
    updateEmployeeSuccess,
    selectAEmployee,
    deleteEmployeeSuccess,
    toggleEmployeeEditModal,
    requestFail
} = actions

export default reducer