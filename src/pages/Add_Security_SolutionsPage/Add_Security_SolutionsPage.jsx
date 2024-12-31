import React, {useEffect, useState} from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import Jodit from "../../utils/jodit/Jodit";
import RadioTabs from "../../utils/RadioTabs/RadioTabs";
import {VanishList} from "./../../utils/VanishList/VanishList";
import {images} from "../../assets/images";
import Modal from "../../utils/Modal/Modal";
import {AddIcon, TrashIcon} from "../../assets/SvgComponents";
import {image} from "./../../../node_modules/jodit/esm/plugins/image/image";
import FormGroup from "./../../utils/FormGroup/FormGroup";
import {motion} from "framer-motion";
import SolutionModal from "./../../components/Add_Security_SolutionsPage/SolutionModal";

const Add_Security_SolutionsPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState([]); // selected language

  const languages = [
    {
      id: 1,
      lable: "English",
      value: "en",
      selected: true,
    },
    {
      id: 2,
      lable: "Spanish",
      value: "es",
    },
  ];

  const [newData, setNewData] = useState([]);
  const [file, setFile] = useState(null);
  const [solutionText, setSolutionText] = useState("");

  useEffect(() => {
    const data = languages.map((item) => {
      return {
        ...item,
        title: "",
        text: "",
        solutions: [],
      };
    });

    setNewData(data);
    setSelectedLanguage(data[0]);
  }, []);

  const onChangeData = (e, key) => {
    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        return {
          ...item,
          [key]: e,
        };
      }
      return item;
    });

    setNewData(changedData);
    console.log(changedData);
  };

  const onAddSolution = () => {
    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        return {
          ...item,
          solutions: [
            ...item.solutions,
            {
              image: file,
              title: solutionText,
            },
          ],
        };
      }
      return item;
    });

    setNewData(changedData);
    setFile(null);
    setSolutionText("");
  };

  React.useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file);
      }
    };
  }, [file]);

  const onRemoveSolutionImage = (index) => {
    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        return {
          ...item,
          solutions: item.solutions.filter((solution, i) => i !== index),
        };
      }
      return item;
    });

    setNewData(changedData);
  };

  return (
    <div>
      <PageContentLayout
        pageTitle={"Security Solutions - Add"}
        description={"In Home Page"}
        AddBtn={true}
        onAddBtnClick={() => ""}
        table={false}
      ></PageContentLayout>

        <RadioTabs
          items={newData}
          onChange={(e, item) => setSelectedLanguage(item)}
        />

      <div className=' bg-white p-6 rounded shadow flex flex-col gap-4 mt-10'>
        {newData?.map((item, index) => {
          if (selectedLanguage.id == item.id) {
            return (
              <div key={index}>
                <div className='flex  gap-3'>
                  <div className='flex flex-col gap-1'>
                    <label htmlFor='' className='text-lg mb-2'>
                      Label:
                    </label>
                    <Jodit
                      content={item?.title}
                      onChange={(e) => onChangeData(e, "title")}
                    />
                  </div>

                  <div className='flex flex-col gap-1'>
                    <label htmlFor='' className='text-lg mb-2'>
                      Title :
                    </label>
                    <Jodit
                      content={item?.text}
                      onChange={(e) => onChangeData(e, "text")}
                    />
                  </div>
                </div>
                <div className='text-lg font-semibold'>Solutions:</div>

                <div className='flex items-center gap-3'>
                  {item?.solutions.map((sol, i) => {
                    return (
                      <div className='relative'>
                        <TrashIcon
                          onClick={() => onRemoveSolutionImage(i)}
                          className=' cursor-pointer absolute top-0 translate-x-[-5px] translate-y-[-10px] right-0 h-14 w-7'
                        />
                        <img
                          className='rounded'
                          width={100}
                          src={
                            sol.image instanceof File
                              ? URL.createObjectURL(sol.image)
                              : sol.image
                          }
                          alt=''
                        />
                        <div className='mt-2'>{sol.title}</div>
                      </div>
                    );
                  })}

                  <div className=''>
                    <motion.label
                      whileHover={{scale: 1.1}}
                      htmlFor='file'
                      className='text-lg mb-2 cursor-pointer'
                    >
                      <img src={images?.addImage} alt='' width={100} />
                      <input
                        type='file'
                        id='file'
                        className='d-none'
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                          e.target.value = null;
                        }}
                      />
                    </motion.label>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div className='flex justify-end gap-3'>
          <motion.button whileHover={{scale: 1.1}} className='t2_button'>
            Save
          </motion.button>
        </div>
      </div>

      <SolutionModal
        file={file}
        setFile={setFile}
        setSolutionText={setSolutionText}
        onAddSolution={onAddSolution}
        solutionText={solutionText}
      />
    </div>
  );
};

export default Add_Security_SolutionsPage;
