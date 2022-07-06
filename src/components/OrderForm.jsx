import React, { useEffect } from "react";
import { useState } from "react";
import { DatePicker, Space, Input, Radio, Button } from "antd";
import "antd/dist/antd.css";
import "./OrderStore.css.css";
import axios from "axios";
import config from "./config";

const OrderForm = () => {
  const [stock, setStock] = useState({
    item_id: "",
    item_name: "",
    purchase_stock: "",
    stock_price: "",
    purchase_date: "",
    total_bill: "",
  });
  const [data, setData] = useState([]);
  let items = {};

  let name, value;
  const inputHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setStock({ ...stock, [name]: value });

    //  console.log(e.target.value)
  };
  useEffect(() => {
    axios.get(`${config.URL}/api/products`).then((res) => {
      setData(res.data.products);
    });

    data.map((ele) => {
      console.log(ele.name);
      // if (ele.name === document.getElementById("item_name")) {
      //   items = ele;
      // }
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="title">ORDER FORM</div>
        <div className="content">
          <form action="#">
            <div class="user-details">
              <div class="input-box">
                <label className="details">Item ID#: </label>
                <Input
                  placeholder="EnterID"
                  className="fix-width"
                  name="item_id"
                  value={stock.item_id}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Item name: </label>
                <Input
                  placeholder="Enter"
                  className="fix-width"
                  name="item_name"
                  value={stock.item_name}
                  onChange={inputHandler}
                  id="item_name"
                />
              </div>

              <div class="input-box">
                <label className="details">Purchase Stock: </label>
                <Input
                  placeholder="no.of quantity"
                  className="fix-width"
                  name="purchase_stock"
                  value={stock.purchase_stock}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Stock Price/Share: </label>
                <Input
                  placeholder="Rs."
                  className="fix-width"
                  name="stock_price"
                  value={stock.stock_price}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Purchase Date: </label>
                <Input
                  type="date"
                  placeholder="password"
                  className="fix-width"
                  name="purchase_date"
                  value={stock.purchase_date}
                  onChange={inputHandler}
                />
              </div>

              <div class="input-box">
                <label className="details">Total Order Bill: </label>
                <Input
                  placeholder="confirm password"
                  className="fix-width"
                  name="total_bill"
                  value={stock.total_bill}
                  onChange={inputHandler}
                />
              </div>

              <div className="button">
                <Button type="primary" style={{ borderRadius: "20px" }}>
                  PLACE ORDER
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
