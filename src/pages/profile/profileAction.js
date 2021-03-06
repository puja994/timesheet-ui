import {
	requestPending,
	getProfileSuccess,
	requestFail,
	passwordRestOTPRequest,
	passwordUpdateRequest,
	resetPassEmail,
} from "./profileSlice";

import { passOtpRequestAPI, updatePasswordAPI } from "../../apis/profileAPI";

export const reqOtpForNewPassword = email => async dispatch => {
	try {
		dispatch(requestPending());
		dispatch(resetPassEmail(email));

		const result = await passOtpRequestAPI(email)

		dispatch(passwordRestOTPRequest(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const updatePassword = passObj => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await updatePasswordAPI(passObj);

		dispatch(passwordUpdateRequest(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};
