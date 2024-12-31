import React, {useEffect, useState} from "react";
import RadioTabs from "../../utils/RadioTabs/RadioTabs";
import DnDFile from "../../utils/DnD_file/DnDFile";
import Jodit from "../../utils/jodit/Jodit";
import FormGroup from "./../../utils/FormGroup/FormGroup";
import {langArrToObject} from "../../instances/LangArraysIntoObjects";
import languages from "../../DommyData/languages";
import PageContentLayout from "../../layouts/PageContentLayout/PageContentLayout";

const AddBannerPage = () => {
  // @desc if data of laguages like this from endpoint

  const [selectedLanguage, setSelectedLanguage] = useState([]); // selected language
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const data = languages.map((item) => {
      return {
        ...item,
        banner: "",
        slogan: "",
        banner_text: "",
        learnMoreURl: "",
        bottomLable: "",
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

  const handleAddBanner = () => {
    const dataset = langArrToObject(newData);

    console.log("result", dataset);
  };

  return (
    <div className=''>
      <PageContentLayout
        pageTitle={"Bannes - Add"}
        description={"In Home Page"}
        AddBtn={true}
        onAddBtnClick={() => ""}
        table={false}
      ></PageContentLayout>
      <div className='shadow rounded overflow-hidden mt-4'>
        <DnDFile accept='image/*' />
      </div>
      <RadioTabs
        items={newData}
        onChange={(e, item) => setSelectedLanguage(item)}
      />
      {newData?.map((item, index) => {
        if (selectedLanguage.id == item.id) {
          return (
            <div className=' bg-white p-5 rounded shadow flex flex-col gap-4'>
              <div className='flex  gap-3'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='' className='text-lg mb-2'>
                    Banner Slogan:
                  </label>
                  <Jodit
                    content={item?.slogan}
                    onChange={(e) => onChangeData(e, "slogan")}
                  />
                </div>

                <div className='flex flex-col gap-1'>
                  <label htmlFor='' className='text-lg mb-2'>
                    Banner Text :
                  </label>
                  <Jodit
                    content={item?.banner_text}
                    onChange={(e) => onChangeData(e, "banner_text")}
                  />
                </div>
              </div>

              <FormGroup rowCount={2}>
                <FormGroup.Input
                  value={item?.learnMoreURl}
                  onChange={(e) => onChangeData(e.target.value, "learnMoreURl")}
                  placeholder='https://owlsight.camp-coding.site/about'
                  label={
                    <>
                      LEARN MORE URL{" "}
                      <span className='text-sm !text-gray-400'>(Optional)</span>
                    </>
                  }
                />
                <FormGroup.Input
                  value={item?.bottomLable}
                  onChange={(e) => onChangeData(e.target.value, "bottomLable")}
                  placeholder=''
                  label={<>Bottom Text </>}
                />
              </FormGroup>
            </div>
          );
        }
      })}

      <div className='flex justify-end mb-5'>
        <button
          onClick={handleAddBanner}
          className='t_button mt-5 p-2 px-4 hover:scale-110 transition'
        >
          Add Banner
        </button>
      </div>
    </div>
  );
};

export default AddBannerPage;
