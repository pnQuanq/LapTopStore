import React from "react";
import styles from "./CardItem.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const CardItem = ({ props }) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate("/productdetail", {
      replace: true,
      state: {
        id: props.id,
        name: props.name,
        price: props.price,
        image: props.image,
      },
    });
  };

  return (
    <div className={cx("wrapper")} onClick={handleDetail}>
      <div key={props.id} className={cx("image")}>
        <img
          src={props.image}
          alt="img"
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "16px 16px 0 0" }}
        />
      </div>
      <div className={cx("info")}>
        <p className={cx("name")}>{props.name}</p>
        <p className={cx("price")}> {props.price} </p>
      </div>
    </div>
  );
};

export default CardItem;
