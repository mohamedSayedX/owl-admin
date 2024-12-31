import React from "react";
import "./style.css";
const RadioTabs = ({items, onChange}) => {
  return (
    <div className='bg-white bg-danger p-3 rounded shadow my-4'>
      <div className='radio-buttons-container'>
        {items?.map((item) => {
          return (
            <div key={item.id} className='radio-button'>
              <input
                defaultChecked={item.selected}
                onChange={(e)=> onChange ?  onChange(e,item) : null}
                name='radio-group'
                id={item.id}
                value={item?.value}
                className='radio-button__input'
                type='radio'
              />
              <label htmlFor={item.id} className='radio-button__label'>
                <span className='radio-button__custom' />
                {item?.lable}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioTabs;
