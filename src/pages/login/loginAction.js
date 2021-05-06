import {
	requestPending,
	loginSuccess,
	updateLogin,
	logoutSuccess,
	requestFail,
	passwordRestOTPRequest,
} from "./loginSlice";

import { getProfileSuccess } from "../profile/profileSlice";
import { adminLogoutAPI } from "../../apis/profileAPI";
import { loginAPI } from "../../apis/loginAPI";
import { tokenAPI } from "../../apis/tokenAPI";

export const sendLogin = formData => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await loginAPI(formData); 
		console.log(result);

		const { accessJWT, refreshJWT } = result;
		accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
		refreshJWT && localStorage.setItem("ourEcommerceRJWT", refreshJWT);
	

		dispatch(loginSuccess(result));
		result.status === "success" && dispatch(getProfileSuccess(result.user));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const userAutoLogin = () => async dispatch => {
	const accessJWT = sessionStorage.getItem("accessJWT");
	const refresJWT = localStorage.getItem("ourEcommerceRJWT");

	accessJWT && dispatch(updateLogin());

	if (!accessJWT && refresJWT) {
		
		const result = await tokenAPI(refresJWT);
		console.log(result);

		if (result.status === "success") {
			sessionStorage.setItem("accessJWT", result.accessJwt);
			dispatch(updateLogin());
		}
	}
};

export const logOut = _id => dispatch => {
	
	sessionStorage.removeItem("accessJWT");
	localStorage.removeItem("ourEcommerceRJWT");

	dispatch(logoutSuccess());
	adminLogoutAPI(_id);

	
};
