import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import profileReducer from "./pages/profile/profileSlice";
import shiftsReducer from "./pages/shifts/shiftsSlice"

const store = configureStore({
	reducer: {
		login: loginReducer,
		profile: profileReducer,
		shifts: shiftsReducer,

	},
});

export default store;