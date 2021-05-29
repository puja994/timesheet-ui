import axios from 'axios'

const rootUrl = "http://localhost:8000/api/v1/"
const employeeApi = rootUrl + "employee"

export const saveEmployee = frmDt => {
    return new Promise (async (resolve,reject)=>{
        try{
            const {data} = await axios.post(employeeApi, frmDt)
            resolve(data)

        }catch(error){
            reject(error)
        }
    })
}

export const getEmployee = frmDt => {
    return new Promise (async(resolve,reject)=>{
        try{
            const {data} = await axios.get(employeeApi, {
                headers: {
                    Authorization: sessionStorage.getItem("accessJWT")
                }
            })
            resolve(data)
        }catch(error){
            reject(error)
        }
    })
}
export const employeeDelete = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.delete(employeeApi, { data: { _id } });

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
}


export const updateEmployee = frmDt => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.put(employeeApi, frmDt);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};

export const getAEmployee = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.get(employeeApi + "/" + _id);

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};