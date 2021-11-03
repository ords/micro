import React from "react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";

import { CSSTransition } from "react-transition-group";

import "./styles.css";

export interface ViewProperties {
  timeout?: number;
  mounted?: boolean;
  animation?: "fade";
  children: React.ReactNode;
  sx?: SxProps;
}

export default function View({
  children,
  sx,
  timeout,
  mounted,
  animation = "fade",
}: ViewProperties) {
  return (
    <CSSTransition
      classNames={"animate--view-" + animation}
      in={mounted}
      unmountOnExit
      timeout={timeout ?? 500}
    >
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "absolute",
          ...sx,
        }}
      >
        {children}
      </Box>
    </CSSTransition>
  );
}
