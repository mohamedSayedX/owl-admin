import React, {useState} from "react";
import axiosInstance from "./../../../API/axiosInstance";
import axios from "axios";

const useGetListOfBanners = () => {
  const [loading, setLoading] = useState(false);

  const [banners, setBanners] = useState([]);
  const [originalBanners, setOriginalBanners] = useState([]);
  

  const handleGetListOfBanners = async (onSuccess = () => null) => {
    setLoading(true);
    await axiosInstance
      .get("/website/banner/list")
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          setBanners(res.data.data);
          setOriginalBanners(res.data.data);
          onSuccess();
        } else {
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return {handleGetListOfBanners, loading, banners , originalBanners , setBanners};
};

export default useGetListOfBanners;
