import React, { useEffect, useState } from "react";

export const Search = ({ onChange, deBounceTime, placeholder }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => onChange(value), deBounceTime);

    return () => clearTimeout(handler);
  });

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={e => setValue(e.target.value)}
      className={'search'}
    ></input>
  );
};
