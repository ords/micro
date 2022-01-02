import React, { Suspense } from "react";
import { useMatch } from "react-router-dom";

import { ViewProps } from "@ords/ui-library/dist/component/View";
import LoadingView from "@ords/ui-library/dist/component/LoadingView";

export type RoutedViewProps = Pick<ViewProps, "animateIn">;

export interface ViewRouteProps {
  path: string;
  Component: React.ExoticComponent<RoutedViewProps>;
}

export default function ViewRoute({ Component, path }: ViewRouteProps) {
  const match = !!useMatch(path);

  return (
    <Suspense fallback={<LoadingView animateIn={true} />}>
      <Component animateIn={match} />
    </Suspense>
  );
}
