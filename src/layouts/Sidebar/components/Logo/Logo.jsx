import React from "react";
import {FireFilled} from "@ant-design/icons";
import "./style.css";
import {images} from "./../../../../assets/images";
const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo-icon'>
        <div className=''>
          <img src={images.logoLight} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Logo;
