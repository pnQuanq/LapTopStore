import React, { useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";

const cx = classNames.bind(styles);

const Register = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isValidName, setIsValidName] = useState(false);

  const handleFocusEmail = () => {
    setIsFocused(true);
  };
  const handleBlurEmail = () => {
    setIsFocused(false);
  };

  const handleChangeEmail = (event) => {
    const inputValue = event.target.value;
    const isValidInput = inputValue.length > 0;
    setIsValid(isValidInput);
  };

  const handleFocusPassword = () => {
    setIsFocusedPass(true);
  };

  const handleBlurPassword = () => {
    setIsFocusedPass(false);
  };

  const handleChangePassword = (event) => {
    const inputValuePass = event.target.value;
    const isValidInputPass = inputValuePass.length > 1;
    setIsValidPass(isValidInputPass);
  };

  const handleFocusName = () => {
    setIsFocusedName(true);
  };

  const handleBlurName = () => {
    setIsFocusedName(false);
  };

  const handleChangeName = (event) => {
    const inputValueName = event.target.value;
    const isValidInputName = inputValueName.length > 1;
    setIsValidName(isValidInputName);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("form-box-register")}>
          <h2>Register</h2>
          <form action="#">
            <div className={cx("input-box")}>
              <span className={cx("icon")}>
                <AiOutlineUser color="white" />
              </span>
              <input
                type="text"
                onFocus={handleFocusName}
                onBlur={handleBlurName}
                onChange={handleChangeName}
              />
              <label
                style={{ top: isFocusedName || isValidName ? "0" : "24px" }}
              >
                Username
              </label>
            </div>
            <div className={cx("input-box")}>
              <span className={cx("icon")}>
                <AiOutlineMail color="white" />
              </span>
              <input
                type="email"
                onFocus={handleFocusEmail}
                onBlur={handleBlurEmail}
                onChange={handleChangeEmail}
              />
              <label style={{ top: isFocused || isValid ? "0" : "24px" }}>
                Email
              </label>
            </div>
            <div className={cx("input-box")}>
              <span className={cx("icon")}>
                <AiOutlineLock color="white" />
              </span>
              <input
                type="password"
                onFocus={handleFocusPassword}
                onBlur={handleBlurPassword}
                onChange={handleChangePassword}
              />
              <label
                style={{ top: isFocusedPass || isValidPass ? "0" : "24px" }}
              >
                Password
              </label>
            </div>
            <button type="submit">Register</button>
            <div className={cx("register-login")}>
              <p>
                Have an account? <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
