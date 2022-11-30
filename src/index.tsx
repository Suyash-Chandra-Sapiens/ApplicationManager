import React, { Component } from "react";
import { render } from "react-dom";
import JourneyProvider from "./journeyProvider";
import "./styles.css";
import queryString from "query-string";
import SwissPostJourney from "./Journeys/SwissPostJourney";
import HomeOwner from "./Journeys/HomeOwner";

import HomePage from "./Pages/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fleet" element={<SwissPostJourney />} />
        <Route path="/HomeOwner" element={<HomeOwner />} />
      </Routes>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
