import React, { useEffect, useState } from "react";
import { DataRefTable } from "./components/DataRefTable";
import { Search } from "./components/Search";
import "./App.css";
const datarefs = require("./DataRefs.json");

export const App = () => {
  const [dataRefValue, setDataRefValue] = useState("");
  const filteredOptions = datarefs.filter(dataref =>
    dataref.n.includes(dataRefValue)
  );

  return (
    <div className="App">
      <Search deBounceTime={500} onChange={value => setDataRefValue(value)} placeholder={'Search for a dataref'} />
      <span>{filteredOptions.length} Results displayed</span>
      <p>DataRefs from Xplane version 1140 on 2019-12-28</p>
      <p>Click to copy the DataRef to your clipboard</p>
      <DataRefTable values={filteredOptions} />
    </div>
  );
};
