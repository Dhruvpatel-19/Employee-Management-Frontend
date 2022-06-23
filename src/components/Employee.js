import React from "react";


const Employee = ({employee}) => {
   
  return (
      <tr>
        {/* <th scope="row">fname</th> */}
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.emailId}</td>
        <td>
          <button type="button" className="btn btn-success mx-2" href="/">
            Update
          </button>
          <button type="button" className="btn btn-danger " >
            Delete
          </button>
        </td>
      </tr>
    
  );
};

export default Employee;
