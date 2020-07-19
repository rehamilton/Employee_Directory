import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import employeesData from "./employees.json"
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import Table from "./components/Table"
import TableHead from "./components/TableHead"
import TableRow from "./components/TableRow"


export default function App() {

  const [employees, setEmployees] = useState(employeesData)
  const [employeeSearch, setEmployeeSearch] = useState("")

  const sortEmployees = () => {
    let sortedArray=[...employees].sort((a,b) => a.name.localeCompare(b.name));
    setEmployees(sortedArray);
  }

  const onSearch = (e) => {
    e.preventDefault()
    setEmployeeSearch(e.target.value)
  }

  return (
    <Wrapper>
      <Header>Employee Directory</Header>
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" value = {employeeSearch} onChange={onSearch}/>
      </div>
      <table className="table">
          <thead className="thead-dark">
            <TableHead clickHandler = {sortEmployees}/>
          </thead>
          <tbody>
            {employees.filter(employee => employee.name.toLowerCase().includes(employeeSearch.toLowerCase())).map(employee => (
                <TableRow 
                id = {employee.id}
                name={employee.name}
                location = {employee.location}
                occupation = {employee.occupation}
                image = {employee.image}
                phone = {employee.phone}
                />
            ))}
          </tbody>
        </table>
    </Wrapper>
  );
}
