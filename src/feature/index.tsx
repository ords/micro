// imports registry and the feature modules

import RoutedView from "../lib/component/ViewRoute";

import { LoginView, RegistrationView } from "./Login";

export const routes = [
  <RoutedView key={"first"} path={"/first"} Component={LoginView} />,
  <RoutedView key={"second"} path={"/second"} Component={RegistrationView} />,
];
