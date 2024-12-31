import React, {useState} from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import Modal from "../../utils/Modal/Modal";
import {AddIcon} from "../../assets/SvgComponents";
import AddBannerPage from "../AddBannerPage/AddBannerPage";
import {useNavigate} from "react-router-dom";

const TestimonialsPage = () => {
  const [modalState, setModalState] = useState("");

  const navigate = useNavigate("");

  return (
    <div>
      <PageContentLayout
        pageTitle={"Customer Testimonials"}
        // description={"in home banners"}
        AddBtn={true}
        onAddBtnClick={() => navigate("/testimonials/add")}
      ></PageContentLayout>
    </div>
  );
};

export default TestimonialsPage;
