import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";

import { CSSTransition } from "react-transition-group";

import "./styles.css";

export interface ViewProps {
  timeout?: number;
  animateIn?: boolean;
  animation?: "fade";
  children?: ReactNode;
  sx?: SxProps;
}

export default function View({
  children,
  sx,
  timeout,
  animateIn,
  animation = "fade",
}: ViewProps) {
  return (
    <CSSTransition
      classNames={"animate--view-" + animation}
      in={animateIn}
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
