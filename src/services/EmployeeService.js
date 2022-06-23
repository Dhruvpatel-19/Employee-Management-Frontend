import axios from "axios";

const BASE_URL = "http://localhost:8080"

class EmployeeServices{
    saveEmployee(employee){
        return axios.post( BASE_URL + "/addEmp" , employee);        
    }

    getEmployees(){
        return axios.get(BASE_URL + "/getAllEmp");
    }

}

export default new EmployeeServices();