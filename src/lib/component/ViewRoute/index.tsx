import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { ViewProps } from "../View";

export type RoutedViewProps = Pick<ViewProps, "animateIn">;

export interface ViewRouteProps {
  path: string;
  Component: React.ExoticComponent<RoutedViewProps>;
}

export default function ViewRoute({ path, Component }: ViewRouteProps) {
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
