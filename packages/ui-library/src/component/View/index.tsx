import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import { styled } from "@mui/material/styles";
import { CSSTransition } from "react-transition-group";

const PREFIX = "fade-animation";

const classes = {
  enter: `${PREFIX}-enter`,
  enterActive: `${PREFIX}-enterActive`,
  exit: `${PREFIX}-exit`,
  exitActive: `${PREFIX}-exitActive`,
};

export interface ViewProps {
  timeout?: number;
  animateIn?: boolean;
  children?: ReactNode;
  sx?: SxProps;
}

const StyledTransition = styled(CSSTransition)(() => ({
  [`&.${classes.enter}`]: {
    opacity: 0,
  },
  [`&.${classes.enterActive}`]: {
    opacity: 1,
    transition: "opacity 500ms ease-in",
  },
  [`&.${classes.exit}`]: {
    opacity: 1,
  },
  [`&.${classes.exitActive}`]: {
    opacity: 0,
    transition: "opacity 500ms ease-in",
  },
}));

export default function View({ children, sx, timeout, animateIn }: ViewProps) {
  return (
    <StyledTransition
      classNames={classes}
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
    </StyledTransition>
  );
}
