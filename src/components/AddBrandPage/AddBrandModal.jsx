import React, {useEffect} from "react";
import {AddIcon} from "../../assets/SvgComponents";
import FormGroup from "../../utils/FormGroup/FormGroup";
import {motion} from "framer-motion";
import {images} from "../../assets/images";
import Modal from "../../utils/Modal/Modal";
import Jodit from "./../../utils/jodit/Jodit";

const AddBrandModal = ({file, setFile, setCardData, onSubmit, cardData}) => {
  return (
    <Modal
      show={cardData.image}
      size={"600px"}
      headerIcon={<AddIcon className='text-primary-blue w-5' />}
      overlay={true}
      animation={true}
      showCloseBtn={true}
      onClose={() =>
        setCardData({
          image: "",
          name: "",
        })
      }
      title={"Add New Brand"}
    >
      <div className='flex items-center justify-center mb-3'>
        <motion.label
          whileHover={{scale: 1.1, marginBottom: "100px"}}
          htmlFor='file'
          className='text-lg mb-2 cursor-pointer'
        >
          <img
            src={
              cardData?.image
                ? URL.createObjectURL(cardData?.image)
                : images?.addImage
            }
            alt=''
            width={150}
          />
          <input
            type='file'
            id='file'
            className='d-none'
            onChange={(e) =>
              setCardData({...cardData, image: e.target.files[0]})
            }
          />
        </motion.label>
      </div>

      <FormGroup rowCount={1}>
        <FormGroup.Input
          label={"Brand Name"}
          placeholder='Enter brand name...'
          required={true}
          value={cardData?.name}
          onChange={(e) => setCardData({...cardData, name: e.target.value})}
        />
      </FormGroup>

      <div className='d-flex justify-end'>
        <motion.button
          onClick={() => onSubmit()}
          whileHover={{scale: 1.1}}
          className='t_button mt-0 p-2 px-4 mt-4'
        >
          Submit
        </motion.button>
      </div>
    </Modal>
  );
};

export default AddBrandModal;
