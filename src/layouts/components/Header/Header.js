import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import config from "../../../config";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link className={cx("logo")} to={config.routes.home}>
          <img
            src="https://salt.tikicdn.com/ts/upload/c1/64/f7/4e6e925ea554fc698123ea71ed7bda26.png"
            alt="tiki-logo"
            width="72"
            height="72"
          />
        </Link>
        <div className={cx("search")}>
          <input placeholder="Tìm sản phẩm" spellCheck={false} />
          <span>|</span>
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("actions")}>
          <Link className={cx("user")} to={config.routes.login}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "16px" }} />
            <p>Tài khoản</p>
          </Link>
          <Link className={cx("cart")} to={config.routes.cart}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ marginRight: "16px" }}
            />
            <p>Giỏ hàng</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
