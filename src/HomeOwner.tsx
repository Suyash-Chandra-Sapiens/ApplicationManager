import React, { Component } from "react";
import { render } from "react-dom";
import JourneyProvider from "./journeyProvider";
import "./styles.css";
import queryString from "query-string";

interface AppProps {}
interface AppState {
  name: string;
}

class HomeOwner extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  parsed = queryString.parse(window.location.search);
  journeyData = {
    formDefault: {
      policyExternalNumber: this.parsed.policyExternalNumber || "",
      userType: this.parsed.userType || ""
    }
  };

  render() {
    return (
      <JourneyProvider
        journeyData={this.journeyData}
        sessionId={""}
        sessionReady={true}
        journeyId={"4f9341d3-c4c5-4237-856c-f73066c2fe17"}
        companyId={"0f9d6a8e-25b3-4eff-9604-7f740642225d"}
        host={"https://demo.portal-foundation-forms-widget.sapienspaas.com"}
      />
    );
  }
}

export default HomeOwner;
