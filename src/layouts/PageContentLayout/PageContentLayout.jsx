import React, {useState} from "react";
import "./style.css";
import CurrentTime from "./../../utils/CurrentTime/CurrentTime";
import {BannerImage} from "./../../assets/SvgComponents";
import AntdTable from "./../../utils/AntdTable/AntdTable";
import Modal from "./../../utils/Modal/Modal";
import DnDFile from "./../../utils/DnD_file/DnDFile";
import SearchInput from "../../utils/SearchInput/SearchInput";
import {motion} from "framer-motion";
import Loader from "../../utils/Loader/Loader";
const PageContentLayout = ({
  pageTitle,
  table = true,
  children,
  loading,
  AddBtn = true,
  onAddBtnClick = () => null,
  onSearch,
  description,
  columns = [],
  data,
}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <motion.div className='PageContentLayout'>
      <motion.div
        initial={{scale: "0"}}
        animate={{scale: 1}}
        className='flex  justify-between '
      >
        <div>
          <div className='Pagename text-5xl font-semibold flex items-end gap-3 text-primary-blue'>
            {" "}
            {pageTitle}{" "}
          </div>
          {description && (
            <p className='w-[400px] mt-2 text-sm text-gray-500 font-semibold'>
              {description}
            </p>
          )}
        </div>
        <div className="hidden md:block">
          <CurrentTime />
        </div>
      </motion.div>

      {table && (
        <div className='layout_table mt-28 !overflow-auto'>
          {loading ? (
            <Loader />
          ) : (
            <div className='__antd_table p-4 rounded-md !overflow-auto !min-w-[800px] bg-white shadow-md flex flex-col gap-2'>
              <div className='flex gap-3'>
                <SearchInput
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    
                  }}
                />
                {AddBtn && (
                  <button onClick={onAddBtnClick} className='table_add_button'>
                    Add New
                  </button>
                )}
              </div>
              <AntdTable columns={columns} data={data} />
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default PageContentLayout;
