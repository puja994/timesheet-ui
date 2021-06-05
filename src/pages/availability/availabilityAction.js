import { requestPending,
    addAvailabilitySuccess, fetchAvailabilitySuccess, deleteAvailabilitySuccess,
    requestFail} from './availabilitySlice'

import {saveAvailability, getAvailability, availabilityDelete} from '../../apis/availabilityAPI'

export const addNewAvailability = frmDt => async dispatch => {
    try{
        dispatch(requestPending())
        const result = await saveAvailability(frmDt)
        console.log(result)
        dispatch(addAvailabilitySuccess(result))
        

        result.status === "success" && dispatch(fetchAvailability())

    }catch(error){
        const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err))
    }
}

export const fetchAvailability = () => async dispatch => {
    try{
        dispatch(requestPending())
        const result = await getAvailability()
        dispatch(fetchAvailabilitySuccess(result))

    }catch(error){
        const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err))

    }
}

export const deleteAvailability = _id => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await availabilityDelete(_id); //{status, message, result:[]}

		dispatch(deleteAvailabilitySuccess(result));

		result.status === "success" && dispatch(fetchAvailability());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};