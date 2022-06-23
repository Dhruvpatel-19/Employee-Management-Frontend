import axios from "axios";

const BASE_URL = "http://localhost:8080"

class EmployeeServices{
    saveEmployee(employee){
        return axios.post( BASE_URL + "/addEmp" , employee);        
    }

    getEmployees(){
        return axios.get(BASE_URL + "/getAllEmp");
    }

    deleteEmployee(id){
        return axios.delete(BASE_URL + "/delEmp/"+id);
    }

    getEmployeeById(id){
        return axios.get(BASE_URL + "/getEmp/"+id);
    }

    updateEmployee(id , employee){
        return axios.put(BASE_URL +" /updateEmp"+id , employee)
    }


}

export default new EmployeeServices();