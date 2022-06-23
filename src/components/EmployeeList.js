import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

function EmployeeList() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="mt-3 col-md-12">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees.map((employee) => (
                <Employee employee={employee} key={employee.id}/>
              ))}
            </tbody>
          )}
        </table>
      </div>

      <div className="text-left">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autoComplete="off"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
}

export default EmployeeList;
