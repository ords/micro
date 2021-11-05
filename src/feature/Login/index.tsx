import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { ViewProps } from "../../lib/component/View";

interface RouteProps {
  path: string;
}

interface Animation {
  animateIn: boolean;
}

const LoginView = lazy(() => import("./LoginView"));

interface RoutedViewProps {
  path: string;
  Component: React.ExoticComponent<Animation>;
}

export function RoutedView({ path, Component }: RoutedViewProps) {
  return (
    <Route
      path={path}
      render={({ match }) => {
        return (
          <Suspense fallback="loading">
            <Component animateIn={!!match} />
          </Suspense>
        );
      }}
    />
  );
}

export default function LoginRoute({ path }: RouteProps) {
  return <RoutedView path={path} Component={LoginView} />;
}
