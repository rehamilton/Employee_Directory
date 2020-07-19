import React from "react";
import "./style.css";


function TableRow(props) {
    
    
    return (
  
        <tr>
            <td><img alt="employee" src={props.image} /></td>
            <td>{props.name}</td>
            <td>{props.occupation}</td>
            <td>{props.location}</td>
            <td>{props.phone}</td>
        </tr>
    )
};

export default TableRow;