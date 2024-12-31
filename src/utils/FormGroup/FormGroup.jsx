import React, {useState, useEffect} from "react";
import "./style.css";
import { useMediaQuery } from './../../customHooks/GeneralHooks/useMediaQueries';

const FormGroup = ({
  Buttons,
  onSubmit,
  rowCount,
  gap,
  colGap,
  rowGap,
  children,
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div className='form_group_container'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className='custom_form'
      >
        <div
          className='custom_inputs_group'
          style={{
            gridTemplateColumns: `repeat(${
              !isSmallScreen ? (rowCount ? rowCount : 3) : 1
            },1fr)`,
            columnGap: colGap ? colGap : "10px",
            rowGap: rowGap ? rowGap : "10px",
            gap: gap ? gap : "10px",
            // gridTemplateColumns: `repeat(auto-fill, minmax( ${rowCount ? rowCount :  3}fr, auto))`
          }}
        >
          {children}
        </div>

        {Buttons && Buttons}
      </form>
    </div>
  );
};

export default FormGroup;

FormGroup.Input = ({textarea, onChange, col, label, required, ...props}) => {
  return (
    <div
      style={{
        gridColumn: col ? ` 1/ ${col}` : "auto",
      }}
    >
      <label>
        {label || ""}
        {required && <span>(*)</span>}
      </label>
      {textarea ? (
        <textarea {...props} onChange={onChange} name='' id='' />
      ) : (
        <input {...props} onChange={onChange} />
      )}
    </div>
  );
};
