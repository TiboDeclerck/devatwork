import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Toolbar from "./Toolbar";
import { useNavigate } from "react-router-dom";
import useCurrentPath from "../../hooks/useCurrentPath";
import { useDataGridContext } from "../../context/DataGridContext";
import { useFetchData } from "../../api/useFetchRows";

export default function Grid() {
  const navigate = useNavigate();
  const path = useCurrentPath();

  const {
    columns,
    filterModel,
    setFilterModel,
    paginationModel,
    setPaginationModel,
    sortModel,
    setSortModel
  } = useDataGridContext();

  const { data, error, isLoading } = useFetchData(`/${path.path}`,path.path);

  return (
    <DataGrid
      filterMode="server"
      paginationMode="server"
      sortMode="server"
      loading={isLoading}
      columns={columns}
      rows={data}
      rowCount={0}
      paginationModel={paginationModel}
      filterModel={filterModel}
      sortModel={sortModel}
      onRowClick={({ id }) => {
        navigate(`/${path.path}/${id}`);
      }}
      onPaginationModelChange={(paginationModel) =>
        setPaginationModel(paginationModel)
      }
      onSortModelChange={(sortMOdel) => setSortModel(sortMOdel)}
      onFilterModelChange={(filterModel) => setFilterModel(filterModel)}
      slots={{
        toolbar: Toolbar,
      }}
      slotProps={{
        loadingOverlay: {
          variant: 'skeleton',
          noRowsVariant: 'skeleton',
        },
      }}
    />
  );
}
