import React, {useState} from "react";
import axiosInstance from "./../../../API/axiosInstance";
import axios from "axios";

const useGetListOfUsers = () => {
  const [loading, setLoading] = useState(false);
  
  const [users, setUsers] = useState([])


  const handleGetListOfUsers = async () => {
    setLoading(true);
    await axiosInstance
      .get("/user/list_website_users")
      .then((res) => {
        setUsers(res.data.data)
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  return {handleGetListOfUsers, loading , users};
};

export default useGetListOfUsers;
