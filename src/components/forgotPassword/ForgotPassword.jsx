import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPasswordComponent = () => {
  const navigate = useNavigate();
  const onClickSubmit = () => {
    alert(
      "an email is sent to you, please follow instructions to renew your password, thanks"
    );
    navigate("/login");
  };

  return (
    <>
      <div className={`${styles.container} full-page`}>
        <h2>Forgot Password</h2>
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <br />
        <div className={styles.containerButtons}>
          <Link to="/login">Back To Login</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={onClickSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordComponent;
