import React from "react";

import styles from "./ProductDetail.module.scss";
import classNames from "classnames/bind";
import linkien from "../../assets/images/linkien.webp";

const cx = classNames.bind(styles);
const ProductDetail = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container-content")}>
        <div className={cx("container-image")}>
          <div className={cx("image")}>
            <img src={linkien} alt="linkien" />
          </div>
          <div className={cx("list-image")}>
            <img src={linkien} alt="linkien" />
            <img src={linkien} alt="linkien" />
            <img src={linkien} alt="linkien" />
            <img src={linkien} alt="linkien" />
            <img src={linkien} alt="linkien" />
          </div>
        </div>
        <div className={cx("container-info")}>
          <div className={cx("base-info")}>
            <div className={cx("name")}>
              <p>Laptop Asus Vivobook S14 S433EA-EB076T</p>
            </div>
            <div className={cx("rate")}>
              <p>4.5*| Sold 10</p>
            </div>
            <div className={cx("price")}>
              <p>18.990.000đ</p>
            </div>
          </div>
          <div className={cx("option-info")}>
            <p>Option 1</p>
            <p>Option 2</p>
          </div>
          <div className={cx("quantity")}>
            <p>Số lượng</p>
            <div className={cx("quantity-wrapper")}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>

          <div className={cx("buy")}>
            <p
              style={{
                color: "#fff",
                fontSize: "24px",
                alignItems: "center",
                justifyContent: "center",
                margin: "0px",
              }}
            >
              MUA NGAY
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "12px",
                alignItems: "center",
                justifyContent: "center",
                margin: "0px",
              }}
            >
              Giao tận nơi hoặc nhận tại cửa hàng
            </p>
          </div>
        </div>
      </div>
      <div className={cx("container-comments")}>
        <p style={{ fontSize: "18px" }}>Đánh giá và nhận xét</p>
        <div className={cx("product-review")}>
          <div className={cx("product-review-average")}>
            <div>
              <p style={{ fontSize: "28px", color: "red" }}>0/5</p>
            </div>
            <div style={{ marginTop: "8px" }}>
              <p>rating</p>
            </div>
            <div>
              <p>0 đánh giá & nhận xét</p>
            </div>
          </div>
          <div className={cx("product-review-detail")}>
            <div className={cx("rating")}>
              <p>5 sao</p>
              <div
                style={{
                  backgroundColor: "#ccc",
                  height: "10px",
                  width: "300px",
                  borderRadius: "5px",
                  marginLeft: "8px",
                }}
              />
            </div>
            <div className={cx("rating")}>
              <p>4 sao</p>
              <div
                style={{
                  backgroundColor: "#ccc",
                  height: "10px",
                  width: "300px",
                  borderRadius: "5px",
                  marginLeft: "8px",
                }}
              />
            </div>
            <div className={cx("rating")}>
              <p>3 sao</p>
              <div
                style={{
                  backgroundColor: "#ccc",
                  height: "10px",
                  width: "300px",
                  borderRadius: "5px",
                  marginLeft: "8px",
                }}
              />
            </div>
            <div className={cx("rating")}>
              <p>2 sao</p>
              <div
                style={{
                  backgroundColor: "#ccc",
                  height: "10px",
                  width: "300px",
                  borderRadius: "5px",
                  marginLeft: "8px",
                }}
              />
            </div>
            <div className={cx("rating")}>
              <p>1 sao</p>
              <div
                style={{
                  backgroundColor: "#ccc",
                  height: "10px",
                  width: "300px",
                  borderRadius: "5px",
                  marginLeft: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
