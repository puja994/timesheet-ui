import axios from 'axios'

const rootUrl = process.env.NODE_ENV ? process.env.REACT_APP_ROOT_API : "http://localhost:8000/api/v1/"
const availabilityApi = rootUrl + "availability"

export const saveAvailability = frmDt =>{
    return new Promise (async (resolve,reject)=>{
        try{
            const {data} = await axios.post(availabilityApi, frmDt)
            resolve(data)

        }catch(error){
            reject(error)
        }
    })
}

export const getAvailability = ()=> {
    return new Promise(async(resolve,reject)=>{
        try{
            const {data} = await axios.get(availabilityApi,{
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

export const availabilityDelete = _id => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data } = await axios.delete(availabilityApi, { data: { _id } });

			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
};