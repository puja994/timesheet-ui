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