import {motion} from "framer-motion";
import {useState} from "react";

const ChipTabs = ({onSelect, tabs}) => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className='  flex items-center flex-wrap gap-2'>
      {tabs.map((tab) => (
        <Chip
          onSelect={onSelect}
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({text, selected, onSelect , setSelected}) => {
  return (
    <button
      onClick={() => {
        setSelected(text);
        onSelect(text);
      }}
      className={`${
        selected
          ? "text-white"
          : "text-gray-900 hover:text-slate-200 hover:bg-slate-400"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className='relative z-10'>{text}</span>
      {selected && (
        <motion.span
          layoutId='pill-tab'
          transition={{type: "spring", duration: 0.5}}
          className='absolute inset-0 z-0 bg-gradient-to-r from-primary-blue to-indigo-600 rounded-md'
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
