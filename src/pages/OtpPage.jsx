import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
const OtpPage = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(10);
  return (
    <div className="otp-page">
      <h1>Verify Your Account</h1>
      <p>We are sending a OTP to validate your mobile number, Hang on!</p>
      <Input type="number" />
      <small>
        Send code again
        <span className="time">
          <span className="minutes">{minute}</span>:
          <span className="seconds">{second}</span>
        </span>
      </small>
      <Button btnText="Send" />
    </div>
  );
};

export default OtpPage;
