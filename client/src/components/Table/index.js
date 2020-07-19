import React, {useState} from "react";
import "./style.css";
import TableHead from "../TableHead";
import TableRow from "../TableRow"
import employees from "../../employees.json"



function Table() {

    

    
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <TableHead />
                </thead>
                <tbody>
                {this.state.employees.map(employee => (
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
        </div>
    );

}

export default Table;