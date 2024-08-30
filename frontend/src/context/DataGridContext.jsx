import React, { createContext, useState, useContext } from "react";
import useColumns from "../hooks/useColumns";

const DataGridContext = createContext();

export function DataGridProvider({ children }) {
  const [filterModel, setFilterModel] = useState({ items: [], logicOperator: "and" });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 25,
  });
  const [sortModel, setSortModel] = useState([]);

  const { columns } = useColumns();

  return (
    <DataGridContext.Provider
      value={{
        columns,
        filterModel,
        setFilterModel,
        paginationModel,
        setPaginationModel,
        sortModel,
        setSortModel,
      }}
    >
      {children}
    </DataGridContext.Provider>
  );
}

export function useDataGridContext() {
  return useContext(DataGridContext);
}
