import React from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";

const ServiceDetails = () => {
  return (
    <div>
      <PageContentLayout
        pageTitle={"Service Details"}
        description={"For <service name>"}
        AddBtn={true}
        onAddBtnClick={() => ""}
        table={false}
      ></PageContentLayout>

      




    </div>
  );
};

export default ServiceDetails;
