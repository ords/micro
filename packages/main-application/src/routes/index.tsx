import { lazy } from "react";
import React from "react";
import { login_login, login_registration } from "@ords/ui-registry";
import { Route } from "react-router-dom";

import ViewRoute from "./ViewRoute";

export const LoginView = lazy(() => import("@ords/feature_auth/dist/Login"));
export const RegistrationView = lazy(
  () => import("@ords/feature_auth/dist/Registration")
);

// TODO: Auto generate this file based on a config
export const routes = [
  <Route
    key={login_login.path}
    path={login_login.path}
    element={<ViewRoute path={login_login.path} Component={LoginView} />}
  />,
  <Route
    key={login_registration.path}
    path={login_registration.path}
    element={
      <ViewRoute path={login_registration.path} Component={RegistrationView} />
    }
  />,
];
