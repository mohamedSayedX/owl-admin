import React, {useState} from "react";
import FormGroup from "./../../../utils/FormGroup/FormGroup";
import DnDFile from "./../../../utils/DnD_file/DnDFile";
import Jodit from "./../../../utils/jodit/Jodit";

const AddModalContent = () => {
  const [newData, setNewData] = useState({
    banner: "",
    slogan: "",
    bannerText: "",
    learnMoreURl: "",
    bottomLable: "",
  });

  const emptyData = () => {
    setNewData({
      banner: "",
      slogan: "",
      learnMoreURl: "",
      bottomLable: "",
    });
  };

  return (
    <div>
      <DnDFile accept='image/*' />

      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='' className='text-lg mb-2'>
            Banner Slogan:
          </label>
          <Jodit content={newData?.slogan} onChange={(e) => null} />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='' className='text-lg mb-2'>
            Banner Text :
          </label>
          <Jodit content={newData?.bannerText} onChange={(e) => null} />
        </div>

        <FormGroup rowCount={1}>
          <FormGroup.Input
            placeholder='https://owlsight.camp-coding.site/about'
            label={
              <>
                LEARN MORE URL{" "}
                <span className='text-sm !text-gray-400'>(Optional)</span>
              </>
            }
          />
        </FormGroup>
        <FormGroup rowCount={1}>
          <FormGroup.Input placeholder='' label={<>Bottom Text </>} />
        </FormGroup>
      </div>
    </div>
  );
};

export default AddModalContent;
