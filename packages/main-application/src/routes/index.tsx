
import { lazy } from "react";
import { login_login, login_registration } from "@ords/ui-registry";

import RoutedView from "@ords/ui-library/dist/component/ViewRoute";

// TODO: MAKE IMAGES WORK IN ROLLUP AND PUT THIS IN A SEPERATE FEATURE
export const LoginView = lazy(() => import("@ords/feature_auth/dist/Login"));
export const RegistrationView = lazy(() => import("@ords/feature_auth/dist/Registration"));

export const routes = [
  <RoutedView
    key={login_login.path}
    path={login_login.path}
    Component={LoginView}
  />,
  <RoutedView
    key={login_registration.path}
    path={login_registration.path}
    Component={RegistrationView}
  />,
];
