import React, { lazy } from "react";
import RoutedView from "../../lib/component/ViewRoute";

interface RouteProps {
  path: string;
}

const LoginView = lazy(() => import("./LoginView"));

export default function LoginRoute({ path }: RouteProps) {
  return <RoutedView path={path} Component={LoginView} />;
}
