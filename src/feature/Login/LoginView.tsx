import React from "react";
import View from "../../lib/component/View";

export default function LoginView(props: any) {
  return (
    <View
      mounted={props.mounted}
      sx={{
        background: "black",
        color: "white",
      }}
    >
      HEEELO
    </View>
  );
}
