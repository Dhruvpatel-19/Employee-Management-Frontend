
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import NavBar from './components/NavBar';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
        <Route index element={<EmployeeList/>}></Route>
          <Route path='/' element={<EmployeeList/>}></Route>
          <Route path='/employeeList' element={<EmployeeList/>}></Route>
          <Route path='/addEmployee' element={ <AddEmployee />}></Route>
          <Route path='/editEmployee/:id' element={<UpdateEmployee/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
