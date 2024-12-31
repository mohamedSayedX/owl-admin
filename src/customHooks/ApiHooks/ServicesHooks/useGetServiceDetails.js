import {useState} from "react";
import axiosInstance from "./../../../API/axiosInstance";
import toast from "react-hot-toast";

const useGetServiceDetails = () => {
  const [loading, setLoading] = useState(false);

  const [serviceDetails, setServiceDetails] = useState(null);

  const handleGetServiceDetails = async (id = 1, onSuccess = () => null) => {
    setLoading(true);
    await axiosInstance
      .get(`/website/service/list?service_id=${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setServiceDetails(res.data.data[0]);
          onSuccess(res.data);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return {handleGetServiceDetails, serviceDetails, loading};
};

export default useGetServiceDetails;
