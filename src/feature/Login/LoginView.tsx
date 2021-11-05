import React from "react";
import View from "../../lib/component/View";
import { RoutedViewProps } from "../../lib/component/ViewRoute";

export default function LoginView({ animateIn }: RoutedViewProps) {
  return (
    <View
      animateIn={animateIn}
      sx={{
        background: "black",
        color: "white",
      }}
    >
      HEEELO
    </View>
  );
}
