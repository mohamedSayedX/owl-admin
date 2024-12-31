import React, {useEffect, useState} from "react";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";
import RadioTabs from "../../utils/RadioTabs/RadioTabs";
import Jodit from "../../utils/jodit/Jodit";
import {EditIcon, TrashIcon} from "../../assets/SvgComponents";
import {motion} from "framer-motion";
import {images} from "../../assets/images";
import SolutionModal from "../../components/Add_Security_SolutionsPage/SolutionModal";
import SecurityModal from "../../components/AddServiceSecurityPage/SecurityModal";
import toast from "react-hot-toast";

const AddServiceSecurityPage = () => {
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
  const [modalState, setModalState] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const [cardData, setCardData] = useState({
    image: "",
    title: "",
    desc: "",
    readMoreURL: "",
  });

  useEffect(() => {
    const data = languages.map((item) => {
      return {
        ...item,
        title: "",
        text: "",
        desc: "",
        cards: [],
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

  const onRemoveSolutionImage = (index) => {
    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        return {
          ...item,
          cards: item.cards.filter((card, i) => i !== index),
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

    if (!cardData?.title) {
      toast.error("Enter Card Title");
      return;
    }
    if (!cardData?.desc) {
      toast.error("Enter Card Description");
      return;
    }
    if (!cardData?.readMoreURL) {
      toast.error("Enter Card Read More URL");
      return;
    }

    const changedData = newData.map((item) => {
      if (selectedLanguage.id == item?.id) {
        if (modalState == "add") {
          return {
            ...item,
            cards: [
              ...item.cards,
              {
                ...cardData,
              },
            ],
          };
        } else {
          return {
            ...item,
            cards: item?.cards.map((card, index) => {
              if (index == selectedCard) {
                return {
                  ...card,
                  ...cardData,
                };
              }
              return card;
            }),
          };
        }
      }
      return item;
    });

    setNewData(changedData);
    setFile(null);
    setCardData({
      image: "",
      title: "",
      desc: "",
      readMoreURL: "",
    });
  };

  return (
    <div>
      <PageContentLayout
        pageTitle={"Service Security - Add"}
        description={"In Home Page"}
        AddBtn={true}
        onAddBtnClick={() => ""}
        table={false}
      ></PageContentLayout>

      <div className='bg-white p-3 rounded shadow my-4'>
        <RadioTabs
          items={newData}
          onChange={(e, item) => setSelectedLanguage(item)}
        />
      </div>

      <div className=' bg-white p-6 rounded shadow flex flex-col gap-4 mt-10'>
        {newData?.map((item, index) => {
          if (selectedLanguage.id == item.id) {
            return (
              <div key={index} className='flex flex-col gap-4'>
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
                <div className='flex flex-col gap-1'>
                  <label htmlFor='' className='text-lg mb-2'>
                    Description:
                  </label>
                  <Jodit
                    content={item?.text}
                    onChange={(e) => onChangeData(e, "text")}
                  />
                </div>

                <div className='flex flex-col  gap-3'>
                  <div className='text-lg font-semibold'>Cards:</div>
                  {item?.cards.map((card, i) => {
                    return (
                      <div className='relative py-4 w-full  px-7 rounded shadow border-1 border-gray-500'>
                        <div className=' flex  gap-2 absolute top-0 right-0 translate-x-[-5px] translate-y-[-10px]'>
                          <EditIcon
                            onClick={() => {
                              setSelectedCard(i);
                              setModalState("edit");
                              setCardData({
                                ...card,
                              });
                            }}
                            className=' cursor-pointer  text-primary-blue h-14 w-6'
                          />
                          <TrashIcon
                            onClick={() => onRemoveSolutionImage(i)}
                            className=' cursor-pointer   h-14 w-7'
                          />
                        </div>
                        <img
                          className='rounded'
                          width={50}
                          src={
                            card.image instanceof File
                              ? URL.createObjectURL(card.image)
                              : card.image
                          }
                          alt=''
                        />

                        <div className='flex items-center gap-4 mt-3'>
                          <div className='flex flex-col gap-2'>
                            <div className='text-primary-blue font-semibold'>
                              {" "}
                              Title:
                            </div>
                            <div className='text-primary-blue font-semibold'>
                              {" "}
                              Description:
                            </div>
                            <div className='text-primary-blue font-semibold'>
                              {" "}
                              URL:{" "}
                            </div>
                          </div>
                          <div className='flex flex-col gap-2'>
                            <div className=''> {card.title}</div>
                            <div className=''> {card.desc}</div>
                            <div className=''> {card.readMoreURL}</div>
                          </div>
                        </div>
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
                          setModalState("add");
                          console.log("cardData", cardData);
                          setCardData({...cardData, image: e.target.files[0]});
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

      <SecurityModal
        file={file}
        setFile={setFile}
        setCardData={setCardData}
        onSubmit={onSubmit}
        cardData={cardData}
      />

      {/* <EditSecurityModal
        file={file}
        setFile={setFile}
        setCardData={setCardData}
        onSubmit={onSubmit}
        cardData={cardData}
      /> */}
    </div>
  );
};

export default AddServiceSecurityPage;
