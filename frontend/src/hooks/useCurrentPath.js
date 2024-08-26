import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { routes } from "../routes/AppRoutes";

export default function useCurrentPath() {
  const location = useLocation();

  const currentRoute = useMemo(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);

    const matchedRoute = routes.find(({ path }) => {
      return path === pathSegments[0];
    });

    if (matchedRoute) {
      return {
        ...matchedRoute,
        isEdit: pathSegments[2] === "edit",
      };
    }

    return null;
  }, [location.pathname]);

  return currentRoute;
}
