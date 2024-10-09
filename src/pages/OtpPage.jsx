import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const OtpPage = () => {
  const [otpCode, setOtpCode] = useState("");
  const [time, setTime] = useState({
    minute: 2,
    second: 0,
  });
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (time.minute === 0 && time.second === 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => {
      if (time.second > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          second: prevTime.second - 1,
        }));
      } else if (time.second === 0 && time.minute > 0) {
        setTime((prevTime) => ({
          minute: prevTime.minute - 1,
          second: 59,
        }));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  const onHandleChange = (e) => {
    setOtpCode(e.target.value);
  };
  const sendData = () => {
    console.log(otpCode);
    setOtpCode("");
  };
  return (
    <div className="otp-page">
      <h1>Verify Your Account</h1>
      <p>
        The 6-digit code has been sent to you as message. Please enter the code
        below to verify your account.
      </p>
      <Input
        type="number"
        placeholder="Enter OTP"
        onChange={onHandleChange}
        value={otpCode}
      />

      <Button btnText="Verify" onClick={sendData} disabled={!otpCode} />

      <small>
        {canResend ? (
          <a href="#resend" className="resend-btn">
            Resend
          </a>
        ) : (
          <>
            Send code again in
            <span className="time">
              {time.minute < 10 ? `0${time.minute}` : time.minute}:
              {time.second < 10 ? `0${time.second}` : time.second}
            </span>
          </>
        )}
      </small>
    </div>
  );
};

export default OtpPage;
