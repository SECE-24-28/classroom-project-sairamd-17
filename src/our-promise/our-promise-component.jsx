import React from "react";
import { OurPromiseStyle } from "./our-promise-style";

const OurPromiseComponent = () => {
  return (
    <OurPromiseStyle>
      <div>
        <div className="ourpromisebox">
            <div> 
                <h2 className=" title">Our Promise</h2>
                <p className="sub-title">As part of our high quality service, we'd like to offer something extra too.</p>
            </div>
            <div className="element">
             <div className="element_item" style={{borderColor: "rgba(60, 116, 162, 1)"}}>
              <div className="item">
                <div className="item_title"> Top Code Quality
                </div>
              </div>
              <div className="element_content"> "Our commitment goes beyond mere code - it encomhpasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality."
              </div>
             </div>

              <div className="element_item" style={{borderColor:"rgb(239, 175, 75)"}}>
              <div className="item">
                <div className="item_title">Responsive </div>
              </div>
              <div className="element_content"> We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.</div>
             </div>

               <div className="element_item" style={{borderColor:" rgb(0, 189, 235)"}}>
              <div className="item">
                <div className="item_title">Rockstar Team </div>
              </div>
              <div className="element_content">Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you, armed with coding skills that are truly exceptional.</div>
             </div>

               <div className="element_item" style={{borderColor: "rgb(134, 74, 249)"}}>
              <div className="item">
                <div className="item_title">Fast Turn-arounds </div>
              </div>
              <div className="element_content">The importance of speed is on par with quality for us. We are swift, nimble, and capable of providing high-quality code within a timeframe that suits your preferences. </div>
             </div>

               <div className="element_item" style={{borderColor: "rgb(252, 41, 71)"}}>
              <div className="item">
                <div className="item_title">Life-time support </div>
              </div>
              <div className="element_content">Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge in the future, feel free to reach out to us for assistance.</div>
             </div>

               <div className="element_item" style={{borderColor: "rgb(50, 199, 102)"}}>
              <div className="item">
                <div className="item_title">Secured Agreement </div>
              </div>
              <div className="element_content">The creative work you receive is entirely your own, and we unequivocally respect that. We assure you of our commitment and readiness to formalize this with a Non-Disclosure Agreement (NDA). </div>
             </div>

            </div>
        </div>
      </div>
    </OurPromiseStyle>
  );
};

export default OurPromiseComponent;
