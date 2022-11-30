// eslint-disable-next-line
// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { JourneyData } from "../../common/utility/helpers/JourneyHelper";
import journeyHostingScript from "./clientScript";

interface Props {
  /**
   * @description journey uuid
   */
  journeyId: string;
  /**
   * @description unique session id for journey
   */
  sessionId?: string;
  /**
   * company Id
   */
  companyId: string;
  /**
   * @description optional default data for journey
   */
  journeyData?: JourneyData;
  /**
   * @description if session is ready the init function will be called
   * prevents loading with 2 different sessionId
   */
  sessionReady: boolean;
  /**
   * environment hosting form
   */
  host: string;
}

const JourneyProvider: React.FC<Props> = ({
  journeyId: formId,
  sessionId,
  companyId,
  sessionReady,
  journeyData,
  host
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionReady) {
      journeyHostingScript(companyId, host);
      window.Journey.init(formId, {
        session: sessionId,
        containerRef: elRef.current,
        data: journeyData?.formDefault
      });
    }
  }, [elRef, sessionReady]);

  return <div ref={elRef} data-testid="form-container" />;
};

JourneyProvider.defaultProps = {
  journeyId: ""
};

export default JourneyProvider;
