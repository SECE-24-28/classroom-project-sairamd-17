import React from "react";
import axios from "axios";

const SignupFormComponentone = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      phone: e.target.phone.value,
      firstname: e.target.firstname.value,
    };

    console.log("Sending to backend:", formData);

    try {
      const res = await axios.post("http://localhost:21000/userSignup", formData);
      console.log("Backend Response:", res.data);

      alert("Signup successful!");
    } catch (error) {
      console.log("Error:", error);

      // Show backend validation message
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div style={{ margin: "40px" }}>
      <h2>Signup Form</h2>

      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        
        <label>Email</label>
        <input type="text" name="email" placeholder="Enter Email" required />

        <label>Phone</label>
        <input type="text" name="phone" placeholder="Enter Phone Number" required />

        <label>First Name</label>
        <input type="text" name="firstname" placeholder="Enter First Name" required />

        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupFormComponentone;
