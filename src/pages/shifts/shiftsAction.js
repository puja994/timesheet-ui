import { requestPending,
    addShiftSuccess,
    requestFail} from './shiftsSlice'

import {saveShift} from '../../apis/shiftAPI'

export const addNewShift = frmDt => async dispatch => {
    try{
        dispatch(requestPending())
        const result = await saveShift(frmDt)
        console.log(result)
        dispatch(addShiftSuccess(result))
        

        // result.status === "success" && dispatch

    }catch(error){
        const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err))
    }
}