import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import profileReducer from "./pages/profile/profileSlice";
import shiftsReducer from "./pages/shifts/shiftsSlice"
import employeeReducer from './pages/employee/employeeSlice'
import selectedEmployeeReducer from './pages/employee/employeeSlice'
import availabilityReducer from './pages/availability/availabilitySlice'

const store = configureStore({
	reducer: {
		login: loginReducer,
		profile: profileReducer,
		shifts: shiftsReducer,
		employee: employeeReducer,
		selectedEmployee: selectedEmployeeReducer,
		availability: availabilityReducer,

	},
});

export default store;