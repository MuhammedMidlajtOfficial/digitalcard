import React from "react";
import { Table, Avatar, Dropdown, Button, Menu } from "antd";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import image1 from "../../../Assets/Images/enterprise4.png";
import { useNavigate } from "react-router-dom";

export const EnterpriseListUsers = () => {
  const navigate = useNavigate();

	const actionMenu = (
		<Menu>
		  <Menu.Item key="1" onClick={()=>navigate('/admin/usermanagement/editusers')}>Edit</Menu.Item>
		  <Menu.Item key="2">Delete</Menu.Item>
		</Menu>
	  );
  const columns = [
    {
      title: "Company Name",
      dataIndex: "userName",
      render: (userName) => (
        <div className="d-flex align-items-center">
          <Avatar src={userName.image} size={40} className="me-2" />
          {userName.name}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile No",
      dataIndex: "phoneNo",
    },
	{
		title: "Users",
		dataIndex: "users",
	  },

    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <Dropdown overlay={actionMenu} trigger={['click']}>
          <Button type="text" icon={<IoEllipsisHorizontalSharp />} />
        </Dropdown>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      userName: { name: "Annette Black", image: image1 },
      email: "abc@gmail.com",
      phoneNo: "989898989",
      users: "126 Users",
      status: "In Process",
    },
    {
      key: "2",
      userName: { name: "Annette Black", image: image1 },
      email: "abc@gmail.com",
      phoneNo: "989898989",
      users: "126 Users",
      status: "Close",
    },
    {
      key: "3",
      userName: { name: "Annette Black", image: image1 },
      email: "abc@gmail.com",
      phoneNo: "989898989",
      users: "126 Users",
      status: "In Process",
    },
  ];

  return (
    <div className=" row">
      <div className="col-lg-12">
        <div className="application-table-section">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5 }}
            className="applied-applicants-table overflow-y-auto"
          />
        </div>
      </div>
    </div>
  );
};
