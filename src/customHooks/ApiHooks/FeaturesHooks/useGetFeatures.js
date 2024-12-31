import React, {useState} from "react";
import axiosInstance from "./../../../API/axiosInstance";
import axios from "axios";

const useGetFeatures = () => {
  const [loading, setLoading] = useState(false);

  const [features, SetFeatures] = useState([]);

  const handleGetFeatures = async (onSuccess = () => null) => {
    setLoading(true);
    await axiosInstance
      .get("/website/features/list")
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          SetFeatures(res.data.data);
          onSuccess();
        } else {
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return {handleGetFeatures, loading, features};
};

export default useGetFeatures;
