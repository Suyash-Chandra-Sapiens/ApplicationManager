import React, { Component, FC, useState } from "react";
import { render } from "react-dom";
import JourneyProvider from "../journeyProvider";
import "../styles.css";
import queryString from "query-string";



 const SwissPostJourney: FC = () =>{
  
  const parsed = queryString.parse(window.location.search);

  const journeyData = {
    formDefault: {
      policyExternalNumber: parsed.policyExternalNumber || ""
    }
  };

return (
  <JourneyProvider
    journeyData={journeyData}
    sessionId={""}
    sessionReady={true}
    journeyId={"6f6c5fac-90ca-46c9-a26b-4ac4c1a841f3"}
    companyId={"0f9d6a8e-25b3-4eff-9604-7f740642225d"}
    host={"https://demo.portal-foundation-forms-widget.sapienspaas.com"}
  />
);
}



export default SwissPostJourney;




// !!!!!!!!!!!!!!!!!!!Class Component!!!!!!!!!!!!!!!!
// class SwissPostJourney extends Component<AppProps, AppState> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       name: "React"
//     };
//   }

//   parsed = queryString.parse(window.location.search);
//   journeyData = {
//     formDefault: {
//       policyExternalNumber: this.parsed.policyExternalNumber || "",
//       userType: this.parsed.userType || ""
//     }
//   };

//   render() {
//     return (
//       <JourneyProvider
//         journeyData={this.journeyData}
//         sessionId={""}
//         sessionReady={true}
//         journeyId={"6f6c5fac-90ca-46c9-a26b-4ac4c1a841f3"}
//         companyId={"0f9d6a8e-25b3-4eff-9604-7f740642225d"}
//         host={"https://demo.portal-foundation-forms-widget.sapienspaas.com"}
//       />
//     );
//   }
// }
