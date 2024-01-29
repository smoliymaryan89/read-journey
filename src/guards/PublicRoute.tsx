import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@hooks/useRedux";
import { selectToken } from "@store/auth/authSelectors";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const token = useAppSelector(selectToken);
  const location = useLocation();

  return !token ? children : <Navigate to={location.state ?? "/"} />;
};

export default PublicRoute;
