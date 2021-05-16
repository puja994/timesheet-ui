import {requestPending, addEmployeeSuccess, requestFail} from './employeeSlice'
import {saveEmployee} from '../../apis/employeeAPI'


export const addNewEmployee = frmDt => async dispatch => {
    try{
        dispatch(requestPending())
        const result = await saveEmployee(frmDt)
        console.log(result)
        dispatch(addEmployeeSuccess(result))
        

        // result.status === "success" && dispatch

    }catch(error){
        const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err))
    }
}