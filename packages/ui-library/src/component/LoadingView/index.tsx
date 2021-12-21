import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { keyframes } from "@emotion/react";
import View, { ViewProps } from "../View";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export default function LoadingView(props: ViewProps) {
  return (
    <View {...props}>
      <Box sx={{ animation: `${bounce} 1s ease infinite` }}>
        <CircularProgress />
      </Box>
    </View>
  );
}
