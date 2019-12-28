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
    <>
      <div>
        <span className={"heading"}>XPlane 11 Datarefs</span>
        <span className="tagline">
          Datarefs from X-Plane 11 version 1140, taken 2019-12-28.
        </span>
        <div>
          <label>
            Search
            <Search
              deBounceTime={275}
              onChange={value => setDataRefValue(value)}
              placeholder={"Search for a dataref"}
            />
          </label>
          <span>{filteredOptions.length} results</span>
        </div>
        <DataRefTable values={filteredOptions} />
      </div>
      <div className="backToTop">
        <a href={"#"}>Back to top of page.</a>
      </div>
    </>
  );
};
