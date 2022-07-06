import React from "react";
import {
  DownCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import style from "./User.module.css";
import { Button, Input, Dropdown, Menu, Space, Table } from "antd";
const { Search } = Input;

const User = () => {
  const onSearch = (value) => console.log(value);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
      ]}
    />
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <h3>
          <img src={record.img} alt="" style={{ width: "3rem" }} />
          {record.name}
        </h3>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" style={{ borderRadius: "50%" }}>
            <EditOutlined />
          </Button>
          <Button type="danger" style={{ borderRadius: "50%" }}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      img: "https://th.bing.com/th/id/OIP.5n41jHLjCl7Fk1NBVLkepgHaHa?pid=ImgDet&rs=1",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      img: "https://th.bing.com/th/id/OIP.5n41jHLjCl7Fk1NBVLkepgHaHa?pid=ImgDet&rs=1",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      img: "https://th.bing.com/th/id/OIP.5n41jHLjCl7Fk1NBVLkepgHaHa?pid=ImgDet&rs=1",
    },
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      img: "https://th.bing.com/th/id/OIP.5n41jHLjCl7Fk1NBVLkepgHaHa?pid=ImgDet&rs=1",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      img: "https://th.bing.com/th/id/OIP.5n41jHLjCl7Fk1NBVLkepgHaHa?pid=ImgDet&rs=1",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      img: "https://th.bing.com/th/id/OIP.5n41jHLjCl7Fk1NBVLkepgHaHa?pid=ImgDet&rs=1",
    },
  ];
  return (
    <div className="main-box">
      <div className="header">
        <h1>Buyers & Suppliers</h1>
        <Search
          placeholder="search for a company"
          onSearch={onSearch}
          enterButton
          style={{ width: "15rem", marginLeft: "35rem" }}
        />

        <Dropdown overlay={menu} className="drop-dn">
          <Button onClick={(e) => e.preventDefault()}>
            <Space>
              Add Comapny
              <DownCircleOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="form">
        <Dropdown overlay={menu} className="drop-dns">
          <Button onClick={(e) => e.preventDefault()}>
            <Space>
              Add Comapny
              <DownCircleOutlined style={{ marginLeft: "10rem" }} />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown overlay={menu} className="drop-dns">
          <Button onClick={(e) => e.preventDefault()}>
            <Space>
              Add Comapny
              <DownCircleOutlined style={{ marginLeft: "10rem" }} />
            </Space>
          </Button>
        </Dropdown>
        <Search
          placeholder="search for a company"
          onSearch={onSearch}
          style={{ width: "35rem" }}
        />
      </div>
      <div className="lists">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default User;
