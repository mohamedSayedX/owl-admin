import React, {useState} from "react";
import axiosInstance from "./../../../API/axiosInstance";
import axios from "axios";

const useGetSecuritySolutions = () => {
  const [loading, setLoading] = useState(false);

  const [solutions, setSolutions] = useState([]);

  const handleGetSecuritySolutions = async (onSuccess = () => null) => {
    setLoading(true);
    await axiosInstance
      .get("/website/security/list")
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setSolutions(res.data.data);
          onSuccess();
        } else {
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return {handleGetSecuritySolutions, loading, solutions};
};

export default useGetSecuritySolutions;
