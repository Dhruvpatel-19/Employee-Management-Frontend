
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import NavBar from './components/NavBar';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
