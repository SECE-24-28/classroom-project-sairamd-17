import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrustedbyComponent = ({ data }) => {
  return (
    <TrustedByStyle>
      <h1>Trusted By</h1>

      <div className="parent">
        {data.map((item, index) => (
          <div className="child" key={index}>
            {item.icon && (
              <FontAwesomeIcon icon={item.icon} style={{ fontSize: "30px" }} />
            )}

            <span className="numbers">{item.number}</span><br />
            <span className="details">{item.details}</span>
          </div>
        ))}
      </div>
    </TrustedByStyle>
  );
};

export default TrustedbyComponent;
