import React from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import {useNavigate} from "react-router-dom";

const OurSecurityExpertsPage = () => {
  const navigate = useNavigate();

  return (
    <div className='ourSecurityExperts'>
      <div>
        <PageContentLayout
          pageTitle={"Our Security Experts"}
          // description={"in home banners"}
          AddBtn={true}
          onAddBtnClick={() => navigate("/security-experts/add")}
        ></PageContentLayout>
      </div>
    </div>
  );
};

export default OurSecurityExpertsPage;
