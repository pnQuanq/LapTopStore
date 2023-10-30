import React from "react";
import styles from "./.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Customer = () => {
  return (<div className={cx("flex-col")}>
    <h2>Giỏ hàng</h2>
    <div className={cx("flex")} style={{gap: '2rem'}}>
      <div className={cx("cart-container")}>
        <div className={cx("item-container")}>
          <div className={cx("flex")} style={{flex: "1 1 40%", alignItems: 'center'}}>
            <input type="checkbox"></input>
            <label>Tất cả (1 sản phẩm)</label>
          </div>
          <div className={cx("flex")} style={{flex: "1 1 60%", justifyContent: 'space-around',
          }}>
            <div>Đơn giá</div>
            <div>Số lượng</div>
            <div>Thành tiền</div>
            <div>Icon</div>
          </div>
        </div>
        <div className={cx("item-container")}>
          <div className={cx("flex")} style={{flex: "1 1 40%", alignItems: 'center'}}>
            <input type="checkbox"></input>
            <img src="/static/media/pc.da3985e199b2bc4bc470.png" alt="Item" style={{width: "5rem", height: "5rem"}}></img>
            Ipad
          </div>
          <div className={cx("flex")} style={{flex: "1 1 60%", justifyContent: 'space-around',
          }}>
            <div>200.000 VND</div>
            <div>3</div>
            <div style={{color: 'red'}}>600.000 VND</div>
            <div>Icon</div>
          </div>
        </div>
      </div>

      <div className={cx("shipping-container")}>
        <div className={cx("flex-aic")}>
          Địa chỉ:&nbsp;
          <span className={cx("bold")}>HCM HCM</span>
          <button className={cx("change-button")}>Thay đổi</button>
        </div>
        
        <div className={cx("flex-between")}>
          Tạm tính
          <span className={cx("bold")}>600.000 VND</span>
        </div>

        <div className={cx("flex-between")}>
          Giảm giá
          <span className={cx("bold")}>90.000 VND</span>
        </div>
        <div className={cx("flex-between")}>
          Phí giao hàng
          <span className={cx("bold")}>0 VND</span>
        </div>
        
        <div className={cx("flex-between")}>
          Tổng tiền 
          <div className={cx("flex-col")}>
            <span style={{fontSize: 32, fontWeight: 'bold', color: 'red'}}>510.000 VND</span>
            <span style={{fontSize: 12, fontStyle: 'italic',}}>(Đã bao gồm VAT nếu có)</span>
          </div>
        </div>
        <button className={cx("buy-button")}>Mua hàng</button>
      </div>
    </div>
  </div>);
};

export default Customer;
