

import React from 'react'
import Modal from '../../utils/Modal/Modal'
import { motion } from 'framer-motion';
import { AddIcon } from '../../assets/SvgComponents';
import { images } from '../../assets/images';
import FormGroup from '../../utils/FormGroup/FormGroup';

const SolutionModal = ({file , setFile , setSolutionText , onAddSolution , solutionText  }) => {
  return (
    
    <Modal
    show={file}
    size={"600px"}
    headerIcon={<AddIcon className='text-primary-blue w-5' />}
    overlay={true}
    animation={true}
    showCloseBtn={true}
    onClose={() => setFile(false)}
    title={"Add Solution"}
  >
    <div className='flex items-center justify-center'>
      <motion.label
        whileHover={{scale: 1.1}}
        htmlFor='file'
        className='text-lg mb-2 cursor-pointer'
      >
        <img
          src={file ? URL.createObjectURL(file) : images?.addImage}
          alt=''
          width={100}
        />
        <input
          type='file'
          id='file'
          className='d-none'
          onChange={(e) => setFile(e.target.files[0])}
        />
      </motion.label>
    </div>

    <FormGroup rowCount={1}>
      <FormGroup.Input
        value={solutionText}
        onChange={(e) => setSolutionText(e.target.value)}
        label={"Solution Text"}
        placeholder='Enter solution text...'
        required
      />
    </FormGroup>

    <div className='d-flex justify-end'>
      <motion.button
        onClick={() => onAddSolution()}
        whileHover={{scale: 1.1}}
        className='t_button mt-0 p-2 px-4 mt-4'
      >
        Submit
      </motion.button>
    </div>
  </Modal>
  )
}

export default SolutionModal
