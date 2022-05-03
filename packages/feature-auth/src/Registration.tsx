import React from "react";
import View, { ViewProps } from "@ords/ui-library/dist/component/View";

export default function FeatureAuth({ animateIn }: ViewProps) {
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
