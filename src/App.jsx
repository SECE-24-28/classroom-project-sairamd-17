import "./App.css";
import { Routes, Route } from "react-router-dom";

import FlexBoxComponent from "./flex-box/flex-box-component";
import FlexWrapComponent from "./flex-wrap/flex-wrap-component";
import HelloWorldComponent from "./hello-world/hello-world-component";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
import OurPromiseComponent from "./our-promise/our-promise-component.jsx";
import PostionComponent from "./positioning/position-component";
import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-excellence-component.jsx";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import PropsPractice from "./props-practice/prop-component.jsx";
import FourOFourcomponent from "./fourofour/fourofour-component.jsx";
import { faBuildingColumns, faUsers } from "@fortawesome/free-solid-svg-icons";
import UseformComponent from "./use-state-form/use-state-form-component.jsx";
import AdditoinOperationComponent from "./addition-operation/addition-operation-component.jsx";
import FormComponent from "./form/form-component.jsx";
import MultiAPIComponent from "./fetch-API/fetch_api-component.jsx";
import SignupFormComponentone from "./signup-form/signup-component--1.jsx";
import LoadingSpinner from "./spinner/load-spinner-component.jsx";
import UserFetchViaEmail from "./user-fetch-via-email/user-fetch-via-email.jsx";

const TrustedByData = [
  {
    icon: faBuildingColumns,
    number: "100+",
    details: "Colleges",
  },
  {
    icon: faUsers,
    number: "150",
    details: "Professional Trainers",
  },
  {
    icon: null,
    number: "1000+",
    details: "Study Materials",
  },
  {
    icon: null,
    number: "100000+",
    details: "Students",
  },
];

function App() {
  return (
    <div>
      {/* <HelloWorldComponent /> */}
      {/* <FlexBoxComponent /> */}
      {/* <LeadersTomorrowComponent /> */}
      {/* <SymbolOfExcellenceComponent /> */}
      {/* <PostionComponent /> */}

      {/* <TrustedbyComponent data={TrustedByData} />  */}
      {/* <FlexWrapComponent /> */}
      {/* <PropsPractice name="sairam" />  */}
      {/* <OurPromiseComponent /> */}

      <Routes>
        {/* <Route path="/trusted" element={<TrustedbyComponent data={TrustedByData} />} /> */}
        {/* <Route path="/symbol/:id" element={<SymbolOfExcellenceComponent />} /> */}
        {/* <Route path="*" element={<FourOFourcomponent />} /> */}
        {/* <Route path="usestate" element={<UseStateComponent />} /> */}
        {/* <Route path="/api-fetch" element={<FetchAPIComponent />} /> */}
        {/* <Route path="/multipleAPI" element={<MultiAPIComponent />} /> */}
        {/* <Route path="/spinner" element={<LoadingSpinner />} /> */}
        {/* <Route path="/addition" element={<AdditoinOperationComponent />} /> */}
        {/* <Route path="/form" element={<UseformComponent />} /> */}
        {/* <Route path="/RegisterForm" element={<FormComponent />} /> */}

        {/* <Route path="/signupform" element={<SignupFormComponentone />} /> */}
         <Route path="/user-fetch-path" element={<UserFetchViaEmail />} />
      </Routes>
    </div>
  );
}

export default App;
