import React, {useEffect} from "react";
import Modal from "../../utils/Modal/Modal";
import {motion} from "framer-motion";
import {AddIcon} from "../../assets/SvgComponents";
import {images} from "../../assets/images";
import FormGroup from "../../utils/FormGroup/FormGroup";

const SecurityModal = ({file, setFile, cardData, onSubmit, setCardData}) => {
  useEffect(() => {
    console.log(cardData);
  }, [cardData]);

  return (
    <Modal
      show={cardData?.image}
      size={"600px"}
      headerIcon={<AddIcon className='text-primary-blue w-5' />}
      overlay={true}
      animation={true}
      showCloseBtn={true}
      onClose={() =>
        setCardData({
          image: "",
          title: "",
          desc: "",
          readMoreURL: "",
        })
      }
      title={"Add Card"}
    >
      <div className='flex items-center justify-center'>
        <motion.label
          whileHover={{scale: 1.1}}
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
            width={100}
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
          value={cardData?.title}
          onChange={(e) => setCardData({...cardData, title: e.target.value})}
          label={"Title"}
          placeholder='Enter Card Title...'
          required
        />

        <FormGroup.Input
          textarea={true}
          value={cardData?.desc}
          onChange={(e) => setCardData({...cardData, desc: e.target.value})}
          label={"Description"}
          placeholder='Enter Card Description...'
          required
        />
        <FormGroup.Input
          value={cardData?.readMoreURL}
          onChange={(e) =>
            setCardData({...cardData, readMoreURL: e.target.value})
          }
          label={"Read More URL"}
          placeholder='https://owlsight.camp-coding.site/service-details'
          required
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

export default SecurityModal;
