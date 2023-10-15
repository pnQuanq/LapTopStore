import React, { useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const cx = classNames.bind(styles);

const Login = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);

  const handleFocusEmail = () => {
    setIsFocused(true);
  };
  const handleBlurEmail = () => {
    setIsFocused(false);
  };

  const handleChangeEmail = (event) => {
    // Kiểm tra tính hợp lệ của input và cập nhật isValid
    const inputValue = event.target.value;
    const isValidInput =
      inputValue.length > 0; /* Điều kiện kiểm tra tính hợp lệ */
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
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("form-box-login")}>
          <h2>Login</h2>
          <form action="#">
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

            <div className={cx("remember-forgot")}>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className={cx("login-register")}>
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
