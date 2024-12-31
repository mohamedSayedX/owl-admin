import React from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import { useNavigate } from "react-router-dom";

const BlogsPage = () => {
  const navigate =useNavigate(true);


  return (
    <div>
      <PageContentLayout
        pageTitle={"Blogs"}
        // description={"in home banners"}
        AddBtn={true}
        onAddBtnClick={() => navigate("/blogs/add")}
      ></PageContentLayout>
    </div>
  );
};

export default BlogsPage;
