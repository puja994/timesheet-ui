import axios from 'axios'

const rootUrl = "http://localhost:8000/api/v1/"
const shiftApi = rootUrl + "shifts"

export const saveShift = frmDt =>{
    return new Promise (async (resolve,reject)=>{
        try{
            const {data} = await axios.post(shiftApi, frmDt)
            resolve(data)

        }catch(error){
            reject(error)
        }
    })
}

export const getShifts = ()=> {
    return new Promise(async(resolve,reject)=>{
        try{
            const {data} = await axios.get(shiftApi,{
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

export const shiftDelete = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.delete(shiftApi, { data: { _id } });

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};