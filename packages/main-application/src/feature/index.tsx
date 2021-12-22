import { login_login, login_registration } from "@ords/ui-registry";

import RoutedView from "@ords/ui-library/dist/component/ViewRoute";

import { LoginView, RegistrationView } from "./Login";

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
