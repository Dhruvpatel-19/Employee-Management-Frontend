import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr>
      {/* <th scope="row">fname</th> */}
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.emailId}</td>
      <td>
        <button
          type="button"
          className="btn btn-success mx-2"
          onClick={(e, id) => editEmployee(e, employee.id)}
        >
          Update
        </button>
        <button
          type="button"
          className="btn btn-danger "
          onClick={(e, id) => deleteEmployee(e, employee.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employee;
