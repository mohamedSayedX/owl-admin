import React, {useEffect, useState} from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import RadioTabs from "../../utils/RadioTabs/RadioTabs";
import Jodit from "../../utils/jodit/Jodit";
import {CancelIcon, EditIcon, TrashIcon} from "../../assets/SvgComponents";
import {motion} from "framer-motion";
import {images} from "../../assets/images";

import toast from "react-hot-toast";

import AddBrandModal from "../../components/AddBrandPage/AddBrandModal";
import FormGroup from "../../utils/FormGroup/FormGroup";
import DnDFile from "../../utils/DnD_file/DnDFile";
import {PlusIcon} from "./../../assets/SvgComponents";

const AddSecurityExpertPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState([]); // selected language
  const [fileUrl, setFileUrl] = useState([]);
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
    {
      id: 3,
      lable: "french",
      value: "fr",
    },
  ];

  const [newData, setNewData] = useState([]);
  const [file, setFile] = useState(null);
  const [modalState, setModalState] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const [cardData, setCardData] = useState({
    image: "",
    name: "",
  });

  useEffect(() => {
    const data = languages.map((item) => {
      return {
        ...item,
        ex_name: "",
        jop_title: "",
        country: "",
        age: "",
        ratings: "",
        desc: "",
        special: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        youtube: "",
        sp_items: [],
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

  React.useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file);
      }
    };
  }, [file]);

  const onRemoveSolutionImage = () => {
    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        return {
          ...item,
          brand: {},
        };
      }
      return item;
    });

    setNewData(changedData);
  };

  const onSubmit = () => {
    if (!cardData.image) {
      toast.error("Enter card image");
      return;
    }

    if (!cardData?.name) {
      toast.error("Enter Brand Name");
      return;
    }

    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        if (modalState == "add") {
          return {
            ...item,
            brand: {
              ...cardData,
            },
          };
        } else {
          return {
            ...item,
            brand: cardData,
          };
        }
      }
      return item;
    });

    setNewData(changedData);
    setFile(null);
    setCardData({
      image: "",
      name: "",
    });
  };

  const handleAddSpCh = () => {
    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        return {
          ...item,
          sp_items: [...item.sp_items, {name: ""}],
        };
      }
      return item;
    });

    setNewData(changedData);
    console.log(changedData);
  };

  const handleRemoveCh = (index, e) => {
    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        return {
          ...item,
          sp_items: item.sp_items.filter((item, i) => index !== i),
        };
      }
      return item;
    });

    setNewData(changedData);
    console.log(changedData);
  };

  const handleChangeCh = (e, i) => {
    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        return {
          ...item,
          sp_items: item.sp_items.map((item, index) => {
            if (index == i) {
              return {
                ...item,
                name: e.target.value,
              };
            }
            return item;
          }),
        };
      }
      return item;
    });

    setNewData(changedData);
  };

  return (
    <div>
      <PageContentLayout
        pageTitle={"Security Experts - Add one"}
        description={"In Home Page"}
        AddBtn={true}
        onAddBtnClick={() => ""}
        table={false}
      ></PageContentLayout>

      <div className='shadow rounded overflow-hidden mt-6'>
        <DnDFile          fileUrl={fileUrl}
          setFileUrl={setFileUrl}
          label={"Choose The Expert Image"}
          accept='image/*'
          onChange={(files) => console.log(files)}
        />
      </div>

      <RadioTabs
        items={newData}
        onChange={(e, item) => setSelectedLanguage(item)}
      />

      <div className=' bg-white p-6  rounded shadow flex flex-col gap-4 mt-10'>
        {newData?.map((item, index) => {
          if (selectedLanguage.id == item.id) {
            return (
              <div className='flex flex-col gap-4'>
                <FormGroup rowCount={2}>
                  <FormGroup.Input
                    value={item?.learnMoreURl}
                    onChange={(e) =>
                      onChangeData(e.target.value, "learnMoreURl")
                    }
                    placeholder='https://owlsight.camp-coding.site/about'
                    label={<>Expert Name: </>}
                  />
                  <FormGroup.Input
                    value={item?.bottomLable}
                    onChange={(e) =>
                      onChangeData(e.target.value, "bottomLable")
                    }
                    placeholder='Lead Security Analyst / OwlSight'
                    label={<>Jop Title: </>}
                  />
                  <FormGroup.Input
                    value={item?.bottomLable}
                    onChange={(e) =>
                      onChangeData(e.target.value, "bottomLable")
                    }
                    placeholder='United States'
                    label={<>Country:</>}
                  />
                  <FormGroup.Input
                    value={item?.bottomLable}
                    onChange={(e) =>
                      onChangeData(e.target.value, "bottomLable")
                    }
                    placeholder='Age'
                    label={<>Age:</>}
                  />
                </FormGroup>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='' className='text-lg mb-2'>
                    BIO :
                  </label>
                  <Jodit
                    content={item?.bannerText}
                    onChange={(e) => onChangeData(e, "bannerText")}
                  />
                </div>
                <FormGroup rowCount={1}>
                  <FormGroup.Input
                    value={item?.bottomLable}
                    onChange={(e) =>
                      onChangeData(e.target.value, "bottomLable")
                    }
                    placeholder='Specialized in:'
                    label={<>Specialized in:</>}
                  />
                </FormGroup>
                <div className='flex items-center justify-between'>
                  <div className='text-lg'>Specialization Characteristics:</div>
                  <div
                    onClick={() => handleAddSpCh()}
                    className='bg-primary-blue text-white rounded-full cursor-pointer'
                  >
                    <PlusIcon />
                  </div>
                </div>

                {item?.sp_items &&
                item?.sp_items.length &&
                Array.isArray(item?.sp_items) ? (
                  <FormGroup rowCount={4}>
                    {item?.sp_items?.map((item, index) => {
                      return (
                        <FormGroup.Input
                          value={item?.name}
                          onChange={(e) => handleChangeCh(e, index)}
                          label={
                            <div className='flex items-center gap-2 '>
                              <CancelIcon
                                onClick={(e) => handleRemoveCh(index, e)}
                                className=' cursor-pointer w-5 h-5 rounded-full text-white bg-danger '
                              />
                              <div>Characteristic {index + 1}</div>
                            </div>
                          }
                        />
                      );
                    })}
                  </FormGroup>
                ) : (
                  <div className='text-center text-lg font-semibold text-gray-400'>
                    No Specialization Characteristics
                  </div>
                )}

                <div className='flex items-center justify-between'>
                  <div className='text-lg'>Expert Socials:</div>
                </div>

                <FormGroup rowCount={4}>
                  <FormGroup.Input
                    value={item?.bottomLable}
                    onChange={(e) =>
                      onChangeData(e.target.value, "bottomLable")
                    }
                    placeholder='Facebook'
                    label={<>Facebook:</>}
                  />
                  <FormGroup.Input
                    value={item?.bottomLable}
                    onChange={(e) =>
                      onChangeData(e.target.value, "bottomLable")
                    }
                    placeholder='Facebook'
                    label={<>Twitter:</>}
                  />
                  <FormGroup.Input
                    value={item?.bottomLable}
                    onChange={(e) =>
                      onChangeData(e.target.value, "bottomLable")
                    }
                    placeholder='Facebook'
                    label={<>Linkedin:</>}
                  />
                  <FormGroup.Input
                    value={item?.bottomLable}
                    onChange={(e) =>
                      onChangeData(e.target.value, "bottomLable")
                    }
                    placeholder='Facebook'
                    label={<>YouTube:</>}
                  />
                </FormGroup>
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

      <AddBrandModal
        file={file}
        setFile={setFile}
        setCardData={setCardData}
        onSubmit={onSubmit}
        cardData={cardData}
      />
    </div>
  );
};

export default AddSecurityExpertPage;
