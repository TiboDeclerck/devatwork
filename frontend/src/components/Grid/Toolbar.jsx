import { Button } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Add from "@mui/icons-material/Add";
import useCurrentPath from "../../hooks/useCurrentPath";
import { useNavigate } from "react-router-dom";

export default function Toolbar() {
  const navigate = useNavigate()
  const path = useCurrentPath();

  return (
    <GridToolbarContainer>
      <Button startIcon={<Add />} onClick={() => navigate(`/${path.path}/new`)}>New {path.title.singular}</Button>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}
