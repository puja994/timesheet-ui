import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login/loginSlice";
import profileReducer from "./pages/profile/profileSlice";

const store = configureStore({
	reducer: {
		login: loginReducer,
		profile: profileReducer,
	},
});

export default store;