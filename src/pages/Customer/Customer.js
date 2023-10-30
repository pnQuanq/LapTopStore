import React from "react";
import styles from "./Customer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Customer = () => {
  return (<>
    <h1>Thông tin tài khoản</h1>
    <div className={cx("customer-container")}>
      <div className={cx("contents-container")}>
        <h3>Thông tin cá nhân</h3>
        <img src="/static/media/pc.da3985e199b2bc4bc470.png" alt="Avatar"></img>
        <table>
          <tr>
            <td>
              <label>Họ và tên</label>
            </td>
            <td>
              <input type="text"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Ngày sinh</label>
            </td>
            <td>
              <input type="text" placeholder="06/09/1969"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>Giới tính</label>
            </td>
            <td>
              <input type="radio" name="gender"></input>
              <label>Nam</label>
              <input type="radio" name="gender"></input>
              <label>Nữ</label>
            </td>
          </tr>
          <tr>
            <td>
              <label>Quốc tịch</label>
            </td>
            <td>
            <input type="text" value="Việt Nam"></input>
            </td>
          </tr>
          </table>
        <div className={cx("centered-btn")}>
          <button>
            Lưu thay đổi
          </button>
        </div>
        
      </div>
      <div className={cx("misc-container")}>
        <table>
          <tr>
            <th colspan="2">
              <h3>Thông tin liên lạc</h3>
            </th>
          </tr>
          <tr>
            <td>
              Số điện thoại<br />
              0969XXXXXX
            </td>
            <td>
              <button>
                Cập nhật
              </button>
            </td>
          </tr>
          <tr>
            <td>
              Địa chỉ email<br />
              abcxyz@gmail.com
            </td>
            <td>
              <button>
                Cập nhật
              </button>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <h3>Bảo mật</h3>
            </th>
          </tr>
          <tr>
            <td>
              Đổi mật khẩu
            </td>
            <td>
              <button>
                Cập nhật
              </button>
            </td>
          </tr>
        </table>
      </div>
      </div>
    </>);
  };
  
  export default Customer;
  