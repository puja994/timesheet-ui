import {requestPending, addEmployeeSuccess,fetchEmployeeSuccess,updateEmployeeSuccess,deleteEmployeeSuccess, requestFail} from './employeeSlice'
import {saveEmployee, getEmployee, employeeDelete, updateEmployee} from '../../apis/employeeAPI'


export const addNewEmployee = frmDt => async dispatch => {
    try{
        dispatch(requestPending())
        const result = await saveEmployee(frmDt)
       
        dispatch(addEmployeeSuccess(result))
        
		result.status === "success" && dispatch(fetchEmployees())

        // result.status === "success" && dispatch

    }catch(error){
        const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err))
    }
}

export const fetchEmployees = () => async dispatch => {
    try{
        dispatch(requestPending())
        const result = await getEmployee()
        dispatch(fetchEmployeeSuccess(result))

    }catch(error){
        const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err))

    }
}
export const deleteEmployee = _id => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await employeeDelete(_id); //{status, message, result:[]}

		dispatch(deleteEmployeeSuccess(result));

		result.status === "success" && dispatch(fetchEmployees());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
}

export const employeeUpdate = formData => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await updateEmployee(formData); //{status, message, result:[]}

		dispatch(updateEmployeeSuccess(result));

		result.status === "success" && dispatch(fetchEmployees());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};