import React, { useEffect } from "react";

import { TransitionGroup } from "react-transition-group";
import { Router, Route } from "react-router-dom";

import { navigation } from "../core/navigation";
import LoadingView from "../lib/component/LoadingView";
import LoginView from "../feature/Login/LoginView";

const routes = [
  { path: "/first", name: "Home", Component: LoginView },
  { path: "/second", name: "About", Component: LoadingView },
];

function PageTransitionExamples() {
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

function App() {
  return <PageTransitionExamples />;
}

export default App;
