import React from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import { useNavigate } from "react-router-dom";

const BrandsPage = () => {


  const navigate = useNavigate()





  return (
    <div>
      <PageContentLayout
        pageTitle={"Brands"}
        // description={"in home banners"}
        AddBtn={true}
        onAddBtnClick={() => navigate("/brands/add")}
      ></PageContentLayout>
    </div>
  );
};

export default BrandsPage;
