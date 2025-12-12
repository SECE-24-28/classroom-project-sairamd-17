import React from "react";
import axios from "axios";
const SignupFormComponent = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("=>(The value:)>=", e.target.email.value);
    // console.log("The first name:", e.target.firstname.value);
    try {
      console.log("CHECK ENTRY 2381");

      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userSignup",
        {
          firstName: e.target.firstname.value,
          lastName: e.target.lastname.value,
          email: e.target.email.value,
        }
      );
      if (pushDetails.status === 200) {
        console.log("The process is successful");
      } else {
        console.log("Error occured");
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" />
        
        <label htmlFor="lastname">Last name</label>
        <input type="text" id="lastname" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignupFormComponent;
