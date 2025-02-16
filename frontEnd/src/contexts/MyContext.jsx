import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = (props) => {
  const [searchData, setSearchData] = useState({ originUrl: "", shotUrl: "" });

  const value = {
    searchData,
    setSearchData,
  };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};
