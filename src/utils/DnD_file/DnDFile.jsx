import React, {useEffect, useRef, useState} from "react";
import "./style.css";
import {trashIcon} from "./svg";
import toast from "react-hot-toast";
import {TrashIcon} from "../../assets/SvgComponents";

const DnDFile = ({
  label,

  onChange,
  fileUrl,
  setFileUrl,
  multiple,
  accept,
  onlyPdfs,
}) => {
  const input = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const files = e.target.files;

    if (onlyPdfs) {
      if (
        Array.from(files)
          .map((file) => file?.name?.lastIndexOf(".pdf"))
          ?.filter((item) => item <= 0)?.length
      ) {
        setFile([]);
        toast.error("Only Pdfs Files Allowed");
        return;
      }
    }

    if (multiple) {
      setFile(Array.from(files));
      // showFiles(files);
    } else {
      setFile(files[0]);
      // showFile(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleDragLeave = () => {
    setIsActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (multiple) {
      setFile(Array.from(files));
      // showFiles(files);
    } else {
      setFile(files[0]);
      // showFile(files[0]);
    }
    setIsActive(false);
  };

  function showFiles(files) {
    const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    const validFiles = Array.from(files).filter((file) =>
      validExtensions.includes(file.type)
    );

    if (validFiles.length !== files.length) {
      alert("Some files are not valid images and were not added.");
    }

    const fileURLs = validFiles.map((file) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      return new Promise((resolve) => {
        fileReader.onload = () => resolve(fileReader.result);
      });
    });

    Promise.all(fileURLs).then((urls) => setFileUrl(urls));
  }

  function showFile(file) {
    const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtensions.includes(file?.type)) {
      const fileReader = new FileReader();
      fileReader.onload = () => setFileUrl(fileReader.result);
      fileReader.readAsDataURL(file);
    } else {
      alert("This is not an Image File!");
      setIsActive(false);
    }
  }

  const handleRemoveImage = (index) => {
    if (multiple) {
      const newFiles = [...file];
      const newUrls = [...fileUrl];
      newFiles.splice(index, 1);
      newUrls.splice(index, 1);
      setFile(newFiles);

      setFileUrl(newUrls);
    } else {
      setFile(null);
      setFileUrl(null);
    }
  };

  useEffect(() => {
    if (file) onChange(file);
  }, [file]);

  return (
    <div
      className={`drag-area overflow-hidden ${isActive ? "active" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className='text-lg mb-3'>{label}</div>

      <div className='_content'>
        <div>
          <UploadIcon />
        </div>

        {!isActive ? (
          <div className='mt-[26px]'>
            <p className="m-0 p-[7px] [font-family:'Roboto-Bold',Helvetica] font-bold text-transparent text-xl text-center tracking-[0] leading-[30.6px]">
              <span className='text-[#0e0e0e]'>Drag & drop files or</span>
              <span className='text-[#333333]'>&nbsp;</span>
              <span
                className='cursor-pointer !text-[#2f584e] underline'
                onClick={() => input.current.click()}
              >
                Browse
              </span>
            </p>
          </div>
        ) : (
          "Drop here"
        )}

        {file && (
          <div className='dndImage'>
            <div>
              {multiple ? (
                <div className='file_name_container_multi'>
                  {file.map((item, index) => (
                    <div key={index} className=''>
                      <div className='relative'>
                        <img
                          width={100}
                          className=''
                          src={
                            item instanceof File
                              ? URL.createObjectURL(item)
                              : item
                          }
                          alt=''
                        />
                        <div
                          onClick={() => handleRemoveImage(index)}
                          className='cursor-pointer absolute top-3 left-2'
                        >
                          <TrashIcon className='text-xl w-8 h-8 cursor-pointer' />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='file_name_container  relative'>
                  <img
                    className='!w-[300px]'
                    src={
                      file instanceof File ? URL.createObjectURL(file) : file
                    }
                    alt=''
                  />
                  <div
                    onClick={() => handleRemoveImage()}
                    className='cursor-pointer absolute top-3 left- '
                  >
                    <TrashIcon className='text-xl w-8 h-8 cursor-pointer' />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <input
        multiple={multiple}
        onChange={handleChange}
        ref={input}
        accept={accept ? accept : ""}
        type='file'
        hidden
      />

      {/* {fileUrl && (
        <div className='dndImage'>
          {multiple ? (
            fileUrl.map((url, index) => (
              <div key={index} className='imageContainer'>
                <div
                  className='dnd_delete_icon'
                  onClick={() => handleRemoveImage(index)}
                >
                  {trashIcon}
                </div>
                <img src={url} alt={`file-preview-${index}`} />
              </div>
            ))
          ) : (
            <div className='imageContainer'>
              <div className='dnd_delete_icon' onClick={handleRemoveImage}>
                {trashIcon}
              </div>
              <img src={fileUrl} alt='file-preview' />
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default DnDFile;

const UploadIcon = (props) => (
  <svg
    width={88}
    height={77}
    viewBox='0 0 88 77'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M45.1997 17.3904C45.0223 17.9852 45.3611 18.6102 45.9555 18.7875L46.0732 18.8226L46.0783 18.8167C46.6359 18.9177 47.1889 18.5839 47.3528 18.0308C48.8455 13.0152 53.5483 9.51126 58.7878 9.51126C59.4081 9.51126 59.9112 9.00815 59.9112 8.38786C59.9112 7.76754 59.4081 7.26446 58.7878 7.26446C52.3484 7.26446 46.9372 11.5518 45.1997 17.3904ZM45.1997 17.3904L45.3829 17.445L45.1997 17.3905C45.1997 17.3905 45.1997 17.3904 45.1997 17.3904Z'
      fill='#2F584E'
      stroke='#F9FFF9'
      strokeWidth={0.382222}
    />
    <path
      d='M71.8388 54.0697H66.2452C65.7305 54.0697 65.313 53.6522 65.313 53.1374C65.313 52.6227 65.7305 52.2051 66.2452 52.2051H71.8388C79.5494 52.2051 85.823 45.9315 85.823 38.2209C85.823 30.5104 79.5494 24.2368 71.8388 24.2368H71.7043C71.434 24.2368 71.1769 24.1196 70.9998 23.9151C70.8227 23.7107 70.7428 23.4397 70.7814 23.172C70.8646 22.5913 70.9066 22.008 70.9066 21.4399C70.9066 14.7575 65.4693 9.32025 58.7869 9.32025C56.1871 9.32025 53.7079 10.1327 51.6169 11.6702C51.1574 12.0079 50.5048 11.858 50.2391 11.3526C44.3172 0.0760613 28.8497 -1.43826 20.8306 8.37134C17.4525 12.504 16.1252 17.8799 17.1888 23.1194C17.306 23.6981 16.8631 24.2375 16.2751 24.2375H15.9016C8.19101 24.2375 1.91738 30.5111 1.91738 38.2217C1.91738 45.9322 8.19101 52.2058 15.9016 52.2058H21.4952C22.0099 52.2058 22.4274 52.6234 22.4274 53.1381C22.4274 53.6529 22.0099 54.0704 21.4952 54.0704H15.9016C7.16271 54.0704 0.0527344 46.9604 0.0527344 38.2216C0.0527344 29.7279 6.76908 22.773 15.1697 22.3895C14.3806 16.9536 15.8896 11.4704 19.3869 7.19135C27.9725 -3.31208 44.4262 -2.13479 51.3815 9.57731C53.6004 8.1862 56.1394 7.45644 58.7866 7.45644C66.8827 7.45644 73.2982 14.3473 72.7368 22.3982C81.0601 22.865 87.6872 29.7831 87.6872 38.2209C87.6872 46.9604 80.5773 54.0697 71.8384 54.0697L71.8388 54.0697Z'
      fill='#2F584E'
    />
    <path
      d='M20.2474 52.611C20.2474 65.5682 30.7886 76.1093 43.7457 76.1093C56.703 76.1093 67.2441 65.568 67.2441 52.611C67.2441 39.6537 56.703 29.1126 43.7457 29.1126C30.7885 29.1126 20.2474 39.6539 20.2474 52.611ZM22.4946 52.611C22.4946 40.8934 32.028 31.3598 43.7457 31.3598C55.4632 31.3598 64.9969 40.8933 64.9969 52.611C64.9969 64.3285 55.4632 73.8621 43.7457 73.8621C32.0282 73.8621 22.4946 64.3287 22.4946 52.611Z'
      fill='#2F584E'
      stroke='#F9FFF9'
      strokeWidth={0.382222}
    />
    <path
      d='M43.2972 61.9938C43.2972 62.4762 43.6884 62.8674 44.1708 62.8674C44.6531 62.8674 45.0445 62.4767 45.0445 61.9938V44.2477C45.0445 43.7653 44.6532 43.3741 44.1708 43.3741C43.6884 43.3741 43.2972 43.7653 43.2972 44.2477V61.9938Z'
      fill='#2F584E'
      stroke='#2F584E'
      strokeWidth={0.382222}
    />
    <path
      d='M44.1712 45.4848L39.3289 50.3272L39.3288 50.3273L44.1712 45.4848ZM44.1712 45.4848L49.0137 50.3273C49.1841 50.4977 49.4083 50.5832 49.6314 50.5832L44.1712 45.4848ZM44.789 43.6315C44.4478 43.2903 43.8943 43.2901 43.5534 43.6315L49.6315 50.5832C49.8542 50.5832 50.0787 50.4984 50.2493 50.3272C50.5905 49.9859 50.5905 49.433 50.2492 49.0917L44.789 43.6315Z'
      fill='#2F584E'
      stroke='#2F584E'
      strokeWidth={0.382222}
    />
  </svg>
);
