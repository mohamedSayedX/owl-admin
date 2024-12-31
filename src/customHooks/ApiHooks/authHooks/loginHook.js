import React, {useState} from "react";
import axiosInstance from "./../../../API/axiosInstance";
import toast from "react-hot-toast";
import axios from "axios";
import {BASE_URL} from "./../../../API/BASE_URL";

const useLoginHook = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = async (dataset, onSuccess = () => null) => {
    setLogin(true);

    await axios
      .post(BASE_URL + "/website/user/loginAdmin", dataset)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          onSuccess(res.data);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      })
      .finally(() => {
        setLogin(false);
      });
  };

  return {handleLogin, login};
};

export default useLoginHook;
