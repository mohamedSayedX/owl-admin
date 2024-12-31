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
import FormGroup from "../../utils/FormGroup/FormGroup";
import AddFeatureModal from "../../components/AddFeatures_HomePage/AddFeatureModal";
import AddTestiModal from "../../components/AddTestiPage/AddTestiModal";

const AddTestiPage = () => {
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
    testi: "",
  });

  useEffect(() => {
    const data = languages.map((item) => {
      return {
        ...item,
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

    if (!cardData?.testi) {
      toast.error("Enter Testimonial content");
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
      testi: "",
    });
  };

  return (
    <div>
      <PageContentLayout
        pageTitle={"Customer Testimonials - Add"}
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
              <div key={index} className='flex flex-col gap-4'>
                <div className='text-lg font-semibold'>Cards:</div>
                <div className='grid grid-cols-1 gap-3'>
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
                        <div className='flex items-center gap-10'>
                          <img
                            className='rounded'
                            width={200}
                            src={
                              card.image instanceof File
                                ? URL.createObjectURL(card.image)
                                : card.image
                            }
                            alt=''
                          />

                          <div className='flex items-center gap-4 mt-3'>
                            <div className='flex flex-col gap-2'>
                              <div className=''>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: card?.testi,
                                  }}
                                />
                              </div>
                            </div>
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
                          console.log(e.target.files[0]);
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

      <AddTestiModal
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

export default AddTestiPage;
