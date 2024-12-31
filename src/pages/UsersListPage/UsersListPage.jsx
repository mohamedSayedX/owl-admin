import React, {useEffect, useState} from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import useGetListOfUsers from "../../customHooks/ApiHooks/usersHooks/useGetListOfUsers";
import {Avatar, Dropdown} from "antd";
import {ThreeDotsIcon} from "../../assets/SvgComponents";
import TableImage from "../../utils/TableImage/TableImage";

const UsersListPage = () => {
  const {handleGetListOfUsers, users, loading} = useGetListOfUsers();
  const [rowData, setRowData] = useState(false);
  const columns = [
    {
      title: "User Image",
      dataIndex: "user_image",
      key: "user_image",
      // render: (imageUrl, row) => <Avatar src={imageUrl} />,
      render: (security_image) => <TableImage src={security_image} />,

    },
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "User Name",
      dataIndex: "user_name",
      key: "user_name",
    },
    {
      title: "User Phone",
      dataIndex: "user_phone",
      key: "user_phone",
    },
    {
      title: "User Email",
      dataIndex: "user_email",
      key: "user_email",
    },
    {
      title: "Actions ",
      key: "actions",
      render: (link, row) => {
        const items = [
          {
            key: "1",
            label: "View Details",
            // onClick: () => setShowDetails(true),
          },
        ];

        return (
          <Dropdown
            menu={{
              items,
            }}
            placement='bottomLeft'
            className='w-fit'
          >
            <div onClick={() => setRowData(row)} className='cursor-pointer'>
              <ThreeDotsIcon />
            </div>
          </Dropdown>
        );

        // <Button onClick={() => navigate(`/services-security/${row._id}`)}>
        //   View More Details
        // </Button>
      },
    },
  ];

  useEffect(() => {
    handleGetListOfUsers();
  }, []);

  return (
    <div>
      <PageContentLayout
        pageTitle={"Users list"}
        description={"OWL website users list"}
        // description={"in home banners"}
        AddBtn={false}
        data={users}
        loading={loading}
        columns={columns}
        table={true}
      ></PageContentLayout>
    </div>
  );
};

export default UsersListPage;
