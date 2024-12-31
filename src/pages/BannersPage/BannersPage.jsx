import React, {useEffect, useState} from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import Modal from "../../utils/Modal/Modal";
import {AddIcon} from "../../assets/SvgComponents";
import AddBannerPage from "../AddBannerPage/AddBannerPage";
import useGetListOfBanners from "../../customHooks/ApiHooks/bannersHooks/useGetBannersList";
import TableImage from "../../utils/TableImage/TableImage";
import {useNavigate} from "react-router-dom";

const BannersPage = () => {
  const [modalState, setModalState] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const {
    handleGetListOfBanners,
    loading,
    setBanners,
    banners,
    originalBanners,
  } = useGetListOfBanners();

  useEffect(() => {
    handleGetListOfBanners();
  }, []);

  const navigate = useNavigate();
  const columns = [
    {
      title: "Banner Image",
      dataIndex: "banner_image",
      key: "banner_image",
      render: (imageUrl) => <TableImage src={imageUrl} />,
    },

    {
      title: "Banner Link Text",
      dataIndex: "banner_image",
      key: "banner_image",
      render: (text, row) => <div>{row?.banner_link_text?.en}</div>,
    },

    {
      title: "Banner Link ",
      dataIndex: "banner_link",
      key: "banner_link",
      render: (link, row) => (
        <a href={link} target='_blank'>
          {link}
        </a>
      ),
    },
    {
      title: "Banner Slogan ",
      dataIndex: "banner_link",
      key: "banner_link",
      render: (text, row) => <div>{row?.banner_slogan?.en}</div>,
    },
    {
      title: "Banner Title ",
      dataIndex: "banner_title",
      key: "banner_title",
      render: (text, row) => <div>{row?.banner_title?.en}</div>,
    },
  ];

  useEffect(() => {
    if (banners) console.log("banners", banners);
  }, [banners]);

  useEffect(() => {
    if (
      originalBanners &&
      originalBanners.length >= 1 &&
      Array.isArray(originalBanners)
    ) {
      if (searchValue.length > 0) {
        const newData = originalBanners.filter((item) => {
          if (
            searchValue &&
            !item?.banner_link_text?.en
              .toLowerCase()
              .includes(searchValue.toLowerCase())
              &&  !item?.banner_slogan?.en
              .toLowerCase()
              .includes(searchValue.toLowerCase())
              &&  !item?.banner_slogan?.en
              .toLowerCase()
              .includes(searchValue.toLowerCase())
              
          ) {
            return false;
          }

          return true;
        });
        setBanners(newData);
      } else {
        setBanners(originalBanners);
      }
    }
  }, [searchValue, originalBanners]);

  return (
    <div>
      <PageContentLayout
        pageTitle={"Banners"}
        description={"In home banners"}
        loading={loading}
        AddBtn={true}
        onSearch={(e) => setSearchValue(e)}
        onAddBtnClick={() => navigate("/banners/add")}
        columns={columns}
        data={banners}
      ></PageContentLayout>

      <Modal
        show={modalState == "add"}
        size={"100%"}
        headerIcon={<AddIcon className='text-primary-blue w-5' />}
        overlay={true}
        animation={true}
        showCloseBtn={true}
        onClose={() => setModalState("")}
        title={"Add New Banner"}
      >
        {modalState == "add" && <AddBannerPage />}
      </Modal>
    </div>
  );
};

export default BannersPage;
