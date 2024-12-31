import React from "react";

const ActivationBadge = ({isActive}) => {
  return (
    <div className=''>
      {isActive == 1 ? (
        <span className='text-success font-bold shadow-lg px-3 py-2 rounded'>
          Active
        </span>
      ) : (
        <span className='text-danger font-bold shadow-lg px-3 py-2 rounded'>
          Not Active
        </span>
      )}
    </div>
  );
};

export default ActivationBadge;
