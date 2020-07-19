import React from "react";
import "./style.css";

function TableHead(props) {
  return (
        <tr>
            <th scope="col">Picture</th>
            <th scope="col" onClick = {props.clickHandler}>Name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Location</th>
            <th scope="col">Phone</th>
        </tr>
  );
}

export default TableHead;