import React, { useEffect } from "react";

import { TransitionGroup } from "react-transition-group";
import { Router } from "react-router-dom";

import { navigation } from "../../../ui-core/dist";
import { routes } from "../feature";

function PageTransitionExamples() {
  useEffect(function () {
    const interval = setInterval(() => {
     /* console.log("toggle");
      if (document.location.href.endsWith("/second")) {
        navigation.history.push("/first");
      } else {
        navigation.history.push("/second");
      }*/
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
  return <TransitionGroup>{routes}</TransitionGroup>;
}

function App() {
  return <PageTransitionExamples />;
}

export default App;
