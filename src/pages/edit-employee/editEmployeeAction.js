// import {
// 	requestPending,
// 	fetchEmployeeSuccess,
// 	updateEmployeeSuccess,
// 	requestFail,
// } from "./selectedEmployeeSlice";

// import { getAEmployee, updateEmployee} from "../../apis/employeeAPI";
// // export const addNewProduct = frmDt => async dispatch => {
// // 	try {
// // 		dispatch(requestPending());

// // 		const result = await saveProduct(frmDt); //{status, message}

// // 		dispatch(addProductSuccess(result));

// // 		result.status === "success" && dispatch(fetchProducts());
// // 	} catch (error) {
// // 		const err = {
// // 			status: "error",
// // 			message: error.message,
// // 		};

// // 		dispatch(requestFail(err));
// // 	}
// // };

// export const fetchAEmployee = _id => async dispatch => {
// 	try {
// 		dispatch(requestPending());

// 		const result = await getAEmployee(_id); //{status, message, result:{}}
// 		dispatch(fetchEmployeeSuccess(result));
// 	} catch (error) {
// 		const err = {
// 			status: "error",
// 			message: error.message,
// 		};

// 		dispatch(requestFail(err));
// 	}
// };

// export const updateAEmployee = formDt => async dispatch => {
// 	try {
// 		dispatch(requestPending());

// 		const result = await updateEmployee(formDt); //{status, message, result:{}}
// 		dispatch(updateEmployeeSuccess(result));
// 	} catch (error) {
// 		const err = {
// 			status: "error",
// 			message: error.message,
// 		};

// 		dispatch(requestFail(err));
// 	}
// };
