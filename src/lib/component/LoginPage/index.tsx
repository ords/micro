import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { keyframes } from "@emotion/react";

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

export default function PageTransitionExamples() {
  const [firstPage, toggleFirstPage] = useState(true);

  useEffect(function () {
    const interval = setInterval(() => {
      toggleFirstPage(!firstPage);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <TransitionGroup>
      {firstPage && (
        <CSSTransition classNames="item" timeout={500}>
          <FirstPage />
        </CSSTransition>
      )}
      {!firstPage && (
        <CSSTransition classNames="item" timeout={500}>
          <LoadingPage />
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

function Page({ children }: any) {
  <Box
    sx={{
      display: "flex",
      height: "100vh",
    }}
  >
    {children}
  </Box>;
}

function FirstPage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        background: "black",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      HEEELO
    </Box>
  );
}

function LoadingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ animation: `${bounce} 1s ease infinite` }}>
        <CircularProgress />
      </Box>
    </Box>
  );
}
