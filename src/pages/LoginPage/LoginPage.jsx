import React, {useState} from "react";
import Logo from "../../layouts/Sidebar/components/Logo/Logo";
import useLoginHook from "../../customHooks/ApiHooks/authHooks/loginHook";
import {saveToken} from "../../API/userAuth";
import {useNavigate} from "react-router-dom";
const LoginPage = () => {
  const {handleLogin, login} = useLoginHook();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    password: "1231",
    email: "mmoh336512@gmail.com",
  });

  const onChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onLoginClick = () => {
    const onSuccess = (data) => {
      console.log(data);
      saveToken(data.data.token);
      navigate("/");
    };

    handleLogin(userData, onSuccess);
  };

  return (
    <div class='w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8'>
      <div class='relative py-3 sm:max-w-xs sm:mx-auto'>
        <div class='min-h-96 px-8 py-6 mt-4 text-left bg-white   rounded-xl shadow-lg'>
          <div class='flex flex-col justify-center items-center h-full select-none'>
            <div class='flex flex-col items-center justify-center gap-2 mb-8'>
              <Logo />

              <p class='m-0 text-[16px] font-semibold '>
                Login to your Account
              </p>
              <span class='m-0 text-xs max-w-[90%] text-center text-[#8B8E98]'>
                Get started with our app, just start section and enjoy
                experience.
              </span>
            </div>
            <div class='w-full flex flex-col gap-2'>
              <label class='font-semibold text-xs text-gray-400 '>Email</label>
              <input
                onChange={onChangeInput}
                value={userData.email}
                name='email'
                class='border rounded-lg px-3 py-2 mb-3 text-sm w-full outline-none '
                placeholder='Email'
              />
            </div>
          </div>
          <div class='w-full flex flex-col gap-2'>
            <label class='font-semibold text-xs text-gray-400 '>Password</label>
            <input
              name='password'
              value={userData.password}
              onChange={onChangeInput}
              type='password'
              class='border rounded-lg px-3 py-2 mb-3 text-sm w-full outline-none '
              placeholder='••••••••'
            />
          </div>
          <div className='mt-3'>
            <button
              onClick={() => onLoginClick()}
              class='py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
