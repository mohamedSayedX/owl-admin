import React, {useEffect} from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import {useNavigate} from "react-router-dom";
import useGetSecuritySolutions from "../../customHooks/ApiHooks/securitySolutionsHooks/useGetSecuritySolutions";
import TableImage from "../../utils/TableImage/TableImage";

const SecuritySoluiton = () => {
  const navigate = useNavigate();

  const {handleGetSecuritySolutions, loading, solutions} =
    useGetSecuritySolutions();

  useEffect(() => {
    handleGetSecuritySolutions();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "security_image",
      key: "security_image",
      render: (security_image) => <TableImage src={security_image} />,
    },

    {
      title: "Title",
      dataIndex: "security_title",
      key: "security_title",
      render: (text, row) => (
        <div className='whitespace-nowrap'>{row?.security_title?.en}</div>
      ),
    },

    {
      title: "Activation ",
      dataIndex: "isActive",
      key: "isActive",
      render: (link, row) => (
        <div className=''>
          {row.isActive ? (
            <span className='text-success'>Active</span>
          ) : (
            <span className='text-danger'>No Active</span>
          )}
        </div>
      ),
    },
  ];

  return (
    <PageContentLayout
      pageTitle={"Security Solutions"}
      description={""}
      AddBtn={true}
      loading={loading}
      columns={columns}
      data={loading ? [] : solutions}
      onAddBtnClick={() => navigate("/securty-solution/add")}
    ></PageContentLayout>
  );
};

export default SecuritySoluiton;
