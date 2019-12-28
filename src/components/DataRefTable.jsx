import React from "react";

const copy = string => {
  const dummyNode = document.createElement("textarea");
  document.body.appendChild(dummyNode);
  dummyNode.value = string;
  dummyNode.select();
  document.execCommand("copy");
  document.body.removeChild(dummyNode);
};

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
          <td>
            {row.n}{" "}
            <button className={"copy-btn"} onClick={() => copy(row.n)}>
              Copy
            </button>
          </td>
          <td>{row.t}</td>
          <td>{row.w}</td>
          <td>{row.u}</td>
          <td>{row.d}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
