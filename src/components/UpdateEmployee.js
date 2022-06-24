import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const updateEmployee = (e) => {
    e.preventDefault();

    console.log(employee);
    EmployeeService.updateEmployee(id, employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-3 col-md-12">
      <form id="myForm" action="/about">
        <h6>Add Employee</h6>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label ">First Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              value={employee.firstName}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              value={employee.lastName}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              name="emailId"
              id="email"
              value={employee.emailId}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success mx-2"
          onClick={updateEmployee}
        >
          Update
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => navigate("/employeeList")}
        >
          Cancle
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
