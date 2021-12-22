import React from "react";
import View from "@ords/ui-library/dist/component/View";
import { RoutedViewProps } from "@ords/ui-library/dist/component/ViewRoute";

export default function RegisterView({ animateIn }: RoutedViewProps) {
  return (
    <View
      animateIn={animateIn}
      sx={{
        background: "blue",
        color: "white",
      }}
    >
      Registration
    </View>
  );
}
