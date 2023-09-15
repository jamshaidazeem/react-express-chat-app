import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";

const ResetPasswordComponent = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const onSubmit = () => {
    console.log(
      "🚀 ~ file: ResetPassword.jsx:12 ~ ResetPasswordComponent ~ fields:",
      JSON.stringify(fields)
    );

    /* 
    alert("Password updated successfully!");
    navigate("/profile"); */
  };

  return (
    <>
      <div className={`${styles.container} full-page`}>
        <h2>Reset Password</h2>
        <br />
        <br />
        <label htmlFor="old password">Old Password</label>
        <input
          name="old password"
          type="password"
          onChange={(e) =>
            setFields({ ...fields, oldPassword: e.target.value })
          }
        />
        <br />
        <label htmlFor="new password">New Password</label>
        <input
          name="new password"
          type="password"
          onChange={(e) =>
            setFields({ ...fields, newPassword: e.target.value })
          }
        />
        <br />
        <label htmlFor="confirm new password">Confirm New Password</label>
        <input
          name="confirm new password"
          type="password"
          onChange={(e) =>
            setFields({ ...fields, confirmPassword: e.target.value })
          }
        />
        <br />
        <br />
        <div className={styles.containerButtons}>
          <Link to="/profile">Back To Profile</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordComponent;
