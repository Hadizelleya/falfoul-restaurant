import React, { createContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <MainContext.Provider value={{ refreshKey, handleRefresh }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
