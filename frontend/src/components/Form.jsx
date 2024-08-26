import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCurrentPath from "../hooks/useCurrentPath";

function ToggleViewButton() {
  const { id } = useParams();
  const navigate = useNavigate();
  const path = useCurrentPath();

  return (
    id && (
      <div>
        <button
          onClick={() =>
            navigate(
              path.isEdit ? `/${path.path}/${id}` : `/${path.path}/${id}/edit`
            )
          }
        >
          {path.isEdit ? "View" : "Edit"}
        </button>
      </div>
    )
  );
}

export default function Form() {
  return (
    <div>
      <ToggleViewButton />
      Form
    </div>
  );
}
