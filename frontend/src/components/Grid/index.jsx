import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Toolbar from "./Toolbar";
import { useNavigate } from "react-router-dom";
import useCurrentPath from "../../hooks/useCurrentPath";

export default function Grid() {
  const navigate = useNavigate();
  const path = useCurrentPath();

  const columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
  ];

  const rows = [
    { id: 0, title: "Example" },
    { id: 1, title: "Demo" },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      onRowClick={({ id }) => {
        navigate(`/${path.path}/${id}`);
      }}
      slots={{
        toolbar: Toolbar,
      }}
    />
  );
}
