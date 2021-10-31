import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Router, Route } from "react-router-dom";
import { keyframes } from "@emotion/react";

import { navigation } from "../../../core/navigation";

import "./styles.css";

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

const routes = [
  { path: "/first", name: "Home", Component: FirstPage },
  { path: "/second", name: "About", Component: LoadingPage },
];

export default function PageTransitionExamples() {
  useEffect(function () {
    const interval = setInterval(() => {
      console.log("toggle");
      if (document.location.href.endsWith("/second")) {
        navigation.history.push("/first");
      } else {
        navigation.history.push("/second");
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <Router history={navigation.history}>
      <AnimatedSwitch />
    </Router>
  );
}

function AnimatedSwitch() {
  return (
    <TransitionGroup>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => <Component mounted={!!match} />}
        </Route>
      ))}
    </TransitionGroup>
  );
}

interface PageProperties {
  timeout?: number;
  mounted?: boolean;
  children: React.ReactNode;
  sx?: SxProps;
}

function Page({ children, sx, timeout, mounted }: PageProperties) {
  return (
    <CSSTransition
      classNames="item"
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

function FirstPage(props: any) {
  return (
    <Page
      mounted={props.mounted}
      sx={{
        background: "black",
        color: "white",
      }}
    >
      HEEELO
    </Page>
  );
}

function LoadingPage(props: any) {
  return (
    <Page mounted={props.mounted}>
      <Box sx={{ animation: `${bounce} 1s ease infinite` }}>
        <CircularProgress />
      </Box>
    </Page>
  );
}
