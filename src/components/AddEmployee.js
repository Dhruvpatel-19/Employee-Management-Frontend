import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function AddEmployee() {

  const navigate = useNavigate();

   const [employee , setEmployee] =  useState({
        "firstName" : "",
        "lastName" : "",
        "emailId" : "",
    });

  const handleOnChange = (e)=>{
    const value = e.target.value;
    setEmployee(  {   ...employee , [e.target.name] : value    }    );
  }

  const saveEmployee = (e) =>{
    e.preventDefault();
    EmployeeService.saveEmployee(employee).then( (response) => {
        console.log(response);
        navigate("/employeeList");
    }).catch(  (error)=>{
        console.log(error);
    });

    
    //document.getElementById("myForm").reset();
    
    /*setEmployee({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
      });*/
  }

  const resetForm = (e) =>{
    e.preventDefault();
    // document.getElementById("myForm").reset();

    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  }

  
  return (
    //style="margin-top:5px"
    <div className="mt-3 col-md-12">
    <form id="myForm" action="/about">
        <h6>Add Employee</h6>
      <div className="mb-3 row" >
        <label className="col-sm-2 col-form-label ">
          First Name
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="firstName" id="firstName" value={employee.firstName} onChange={handleOnChange}/>
        </div>
      </div>

      <div className="mb-3 row">
        <label  className="col-sm-2 col-form-label" >
          Last Name
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="lastName"  id="lastName" value={employee.lastName} onChange={handleOnChange}/>
        </div>
      </div>


      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" name="emailId"  id="email" value={employee.emailId}   onChange={handleOnChange}/>
        </div>
      </div>
      <button type="submit" className="btn btn-success mx-2" onClick={saveEmployee}>Add Employee</button>
      <button  className="btn btn-danger mx-2"  onClick={resetForm} >Reset</button>
      
      </form>
    </div>
  );
}

export default AddEmployee;
