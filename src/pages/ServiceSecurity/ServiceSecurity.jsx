import React, {useEffect, useState} from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import {useNavigate} from "react-router-dom";
import useGetServices from "./../../customHooks/ApiHooks/ServicesHooks/useGetServices";
import TableImage from "../../utils/TableImage/TableImage";
import ActivationBadge from "../../utils/ActivationBadge/ActivationBadge";
import {Button, Dropdown} from "antd";
import {ThreeDotsIcon} from "../../assets/SvgComponents";
import ServiceDetails from "./../ServiceDetails/ServiceDetails";
import ServiceDetailsModal from "../../components/ServiceSecurity/ServiceDetailsModal";

const ServiceSecurity = () => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [rowData, setRowData] = useState(null);
  const {handleGetServices, services, loading} = useGetServices();
  useEffect(() => {
    handleGetServices();
  }, []);

  const columns = [
    {
      title: "Icon",
      dataIndex: "service_icon",
      key: "service_icon",
      render: (service_icon) => <TableImage src={service_icon} />,
    },

    {
      title: "Image",
      dataIndex: "service_image",
      key: "service_image",
      render: (service_image) => <TableImage src={service_image} />,
    },

    {
      title: "Activation ",
      dataIndex: "isActive",
      key: "isActive",
      render: (link, row) => <ActivationBadge isActive={row?.isActive} />,
    },

    {
      title: "Actions ",
      dataIndex: "isActive",
      key: "isActive",
      render: (link, row) => {
        const items = [
          {
            key: "1",
            label: "View Details",
            onClick: () => setShowDetails(true),
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

  return (
    <>
      <PageContentLayout
        pageTitle={"Service Security"}
        description={""}
        AddBtn={true}
        loading={loading}
        columns={columns}
        data={loading ? [] : services}
        onAddBtnClick={() => navigate("/services-security/add")}
      ></PageContentLayout>

      <ServiceDetailsModal
        setOpen={setShowDetails}
        open={showDetails}
        id={rowData?.id}
      />
    </>
  );
};

export default ServiceSecurity;
