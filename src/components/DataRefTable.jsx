import React from "react";

export const DataRefTable = ({ values }) => (
  <table>
    <thead>
      <tr>
        <th>DataRef</th>
        <th>Type</th>
        <th>Writable</th>
        <th>Unit</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {values.map(row => (
        <tr key={row.n}>
          <td>{row.n}</td>
          <td>{row.t}</td>
          <td>{row.w}</td>
          <td>{row.u}</td>
          <td>{row.d}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
