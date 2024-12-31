import { useState } from "react";
import axiosInstance from "./../../../API/axiosInstance";
import toast from "react-hot-toast";

const useGetServices = () => {
  const [loading, setLoading] = useState(false);

  const [services, setServices] = useState([]);

  const handleGetServices = async (onSuccess = () => null) => {
    setLoading(true);
    await axiosInstance
      .get("/website/service/list")
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setServices(res.data.data);
          onSuccess();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return {handleGetServices, services, loading};
};

export default useGetServices;
