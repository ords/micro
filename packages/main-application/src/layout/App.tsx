import React, { useEffect, useState } from "react";

import { TransitionGroup } from "react-transition-group";
import { Router, Routes } from "react-router-dom";

import { navigation } from "@ords/ui-core";
import { routes } from "../routes";

function CleanLayout() {
  const [location, setLocation] = useState(navigation.history.location);

  useEffect(function () {
    const interval = setInterval(() => {
      if (document.location.href.endsWith("/second")) {
        navigation.history.push("/first");
      } else {
        navigation.history.push("/second");
      }
    }, 2000);

    const clearHistoryListner = navigation.history.listen(function updateState(
      nextLocation
    ) {
      setLocation(nextLocation);
    });

    return () => {
      clearInterval(interval);
      clearHistoryListner();
    };
  });

  return (
    <TransitionGroup>
      <Router navigator={navigation.history} location={location}>
        <Routes>{routes}</Routes>;
      </Router>
    </TransitionGroup>
  );
}

export default CleanLayout;
