import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { ViewProps } from "../View";
import LoadingView from "../LoadingView";

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
          <Suspense fallback={<LoadingView animateIn={true} />}>
            <Component animateIn={!!match} />
          </Suspense>
        );
      }}
    />
  );
}
