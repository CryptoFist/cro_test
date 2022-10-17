import React from "react";

export default function ReduxAssessmentTable({ rows }) {
  return (
    <table id="reduxAssessmentTable">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.title}</td>
            <td>{row.description}</td>
            <td>
              <img alt="description" src={row.image} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
