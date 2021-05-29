import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
	employee: {},
};

const selectedEmployeeSlice = createSlice({
	name: "editEmployee",
	initialState,
	reducers: {
		requestPending: state => {
			state.isLoading = true;
		},
		updateEmployeeSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},

		fetchEmployeeSuccess: (state, { payload }) => {
			state.employee = payload.result || {};
			state.isLoading = false;
		},

		requestFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = payload.status;
			state.message = payload.message;
		},
	},
});

const { reducer, actions } = selectedEmployeeSlice;

export const {
	requestPending,
	fetchEmployeeSuccess,
	updateEmployeeSuccess,
	requestFail,
} = actions;

export default reducer;
