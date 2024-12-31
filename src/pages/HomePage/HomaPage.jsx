import React, {useState} from "react";
import "./style.css";
import {arrow_down, copyIcon, ShareIcon} from "../../assets/svgicons";
import {Space, Table, Tag} from "antd";
import ChipTabs from "./../../utils/ChipTabs/ChipTabs";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import {useNavigate} from "react-router-dom";
import SecuritySoluiton from "../SecuritySoluiton/SecuritySoluiton";
import ServiceSecurity from "../ServiceSecurity/ServiceSecurity";
import HomeFeatures from "../HomeFeatures/HomeFeatures";
const HomePage = () => {
  const columns = [
    {
      title: "First Name",
      dataIndex: "name",
      key: "name",
      render: (text, row) => text,
    },
    {
      title: "Latest Name",
      dataIndex: "last_name",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "address",
    },
    {
      title: "Conversation",
      key: "tags",
      dataIndex: "Conversation",
      render: (_, {tags}) => <div className='text-center font-bold'>{_}</div>,
    },
  ];

  const data = [
    {
      key: "1",
      name: "John ",
      last_name: "Brown",
      email: "john@gmail.com",
      Conversation: <Tag color='blue'>15%</Tag>,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jack ",
      last_name: "Noah",
      email: "jack134@gmail.com",
      Conversation: <Tag color='blue'>20%</Tag>,
      address: "New York No. 1 Lake Park",
    },
  ];

  const tabs = ["Security Solutions", "Service Security", "Features"];

  const [selectedTab, setSelectedTab] = useState("Security Solutions");

  const navigation = useNavigate();

  return (
    <div className=''>
      <div className='mb-4'>
        <ChipTabs onSelect={(e) => setSelectedTab(e)} tabs={tabs} />
      </div>

      {selectedTab == "Security Solutions" ? (
        <SecuritySoluiton />
      ) : selectedTab == "Service Security" ? (
        <ServiceSecurity />
      ) : (
       <HomeFeatures />
      )}
    </div>
  );
};

export default HomePage;
