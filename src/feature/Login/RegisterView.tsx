import React from "react";
import View from "../../lib/component/View";
import { RoutedViewProps } from "../../lib/component/ViewRoute";

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
