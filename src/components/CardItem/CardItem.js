import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./CardItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CardItem = ({ props }) => {
  return (
    <div className={cx("container")}>
      <div key={props.id} className={cx("image")}>
        <img src={props.image} alt="img" width={"100%"} />
      </div>
      <div className={cx("info")}>
        <p className={cx("name")}>{props.name}</p>
        <p className={cx("price")}> {props.price} </p>
      </div>
    </div>
  );
};

export default CardItem;
