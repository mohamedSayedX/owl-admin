import React, {useEffect, useState} from "react";
import Modal from "./../../utils/Modal/Modal";
import useGetServiceDetails from "../../customHooks/ApiHooks/ServicesHooks/useGetServiceDetails";
import RadioTabs from "./../../utils/RadioTabs/RadioTabs";
import languages from "../../DommyData/languages";

const ServiceDetailsModal = ({open, setOpen, id}) => {
  const {handleGetServiceDetails, loading, serviceDetails} =
    useGetServiceDetails();

  useEffect(() => {
    handleGetServiceDetails(id);
  }, [id]);

  useEffect(() => {
    if (serviceDetails) console.log("serviceDetails", serviceDetails);
  }, [serviceDetails]);

  const [selectedLang, setSelectedLang] = useState();

  return (
    <Modal
      show={open}
      setOpen={setOpen}
      size={"900px"}
      overlay={true}
      animation={true}
      title={"Service Details"}
      onClose={() => {
        setOpen(false);
      }}
    >
      <RadioTabs
        items={languages}
        onChange={(e, item) => setSelectedLang(item)}
      />

      <div className='flex flex-col gap-3'>
        <div>
          <img src={serviceDetails?.service_image} alt='' />
        </div>

        <div>
          <div>
            <h1
              className='text-lg font-semibold text-gray-900'
              dangerouslySetInnerHTML={{
                __html:
                  serviceDetails?.service_title?.[selectedLang?.value] ||
                  "___________________________",
              }}
            />

            <p
              className='mt-3 text-gray-600'
              dangerouslySetInnerHTML={{
                __html:
                  serviceDetails?.service_description?.[selectedLang?.value] ||
                  "___________________________",
              }}
            />
            <div
              className='mt-5 text-gray-600'
              dangerouslySetInnerHTML={{
                __html:
                  serviceDetails?.service_text?.[selectedLang?.value] ||
                  "___________________________",
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceDetailsModal;
