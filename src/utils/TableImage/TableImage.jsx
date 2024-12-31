import React, {useState} from "react";
import Modal from "../Modal/Modal";
import {motion} from "framer-motion";

const TableImage = ({src}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.img
        whileHover={{scale: 1.1}}
        onClick={() => setShowModal(true)}
        loading='lazy'
        onError={(e) =>
          (e.target.src =
            "https://res.cloudinary.com/dbzn1y8rt/image/upload/v1735643913/uspiaz37moatrwckryqp.png")
        }
        src={src}
        className='rounded shadow-md w-[100px] cursor-pointer height-[100px] object-contain'
        alt=''
      />

      <Modal
        animation={true}
        overlay={true}
        show={showModal}
        onClose={() => setShowModal(false)}
        size={"800px"}
        showCloseBtn={true}
      >
        <div className='p-4'>
          <img src={src} alt='' className='rounded shadow-lg' />
        </div>
      </Modal>
    </>
  );
};

export default TableImage;
