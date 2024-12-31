import {AnimatePresence, useAnimate, usePresence} from "framer-motion";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {CancelIcon, PlusIcon} from "../../assets/SvgComponents";

export const VanishList = () => {
  const [todos, setTodos] = useState([]);

  const handleCheck = (id) => {
    setTodos((pv) =>
      pv.map((t) => (t.id === id ? {...t, checked: !t.checked} : t))
    );
  };

  const removeElement = (id) => {
    setTodos((pv) => pv.filter((t) => t.id !== id));
  };

  return (
    <section className=''>
      <div className='mx-auto w-full max-w-xl px-4'>
        <Todos
          removeElement={removeElement}
          todos={todos}
          handleCheck={handleCheck}
        />
      </div>
      <Form setTodos={setTodos} />
    </section>
  );
};

const Form = ({setTodos}) => {
  const [visible, setVisible] = useState(false);

  const [time, setTime] = useState(15);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.length) {
      return;
    }

    setTodos((pv) => [
      {
        id: Math.random(),
        text,
        checked: false,
      },
      ...pv,
    ]);

    setTime(15);
    setText("");
  };

  return (
    <div className=' bottom-6  w-full max-w-xl mx-auto mt-4 px-4'>
      <AnimatePresence>
        {visible && (
          <motion.form
            layout
            initial={{opacity: 0, y: 25}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 25}}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className='mb-6 w-full rounded border border-zinc-700 bg-slate-50  p-3'
          >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='What do you need to do?'
              className='h-24 w-full resize-none rounded bg-slate-50   p-3 text-sm text-gray-900 placeholder-zinc-500 caret-zinc-50 focus:outline-0'
            />
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-1.5'></div>
              <button
                type='submit'
                className='rounded bg-indigo-600 px-1.5 py-1 text-xs text-indigo-50 transition-colors hover:bg-indigo-500'
              >
                Submit
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <button
        onClick={() => setVisible((pv) => !pv)}
        className='grid w-full place-content-center rounded-full border border-zinc-700 bg-zinc-900 py-1 text-lg text-white transition-colors hover:bg-zinc-800 active:bg-zinc-900'
      >
        <PlusIcon
          className={`transition-transform ${
            visible ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

const Todos = ({todos, handleCheck, removeElement}) => {
  return (
    <div className='w-full space-y-3'>
      <AnimatePresence>
        {todos.map((t) => (
          <Todo
            handleCheck={handleCheck}
            removeElement={removeElement}
            id={t.id}
            key={t.id}
            checked={t.checked}
            time={t.time}
          >
            {t.text}
          </Todo>
        ))}
      </AnimatePresence>
    </div>
  );
};

const Todo = ({removeElement, handleCheck, id, children, checked, time}) => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        animate(
          "p",
          {
            color: checked ? "#6ee7b7" : "#fca5a5",
          },
          {
            ease: "easeIn",
            duration: 0.125,
          }
        );
        await animate(
          scope.current,
          {
            scale: 1.025,
          },
          {
            ease: "easeIn",
            duration: 0.125,
          }
        );

        await animate(
          scope.current,
          {
            opacity: 0,
            x: checked ? 24 : -24,
          },
          {
            delay: 0.75,
          }
        );
        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return (
    <motion.div
      ref={scope}
      layout
      className='relative flex w-full items-center gap-3 rounded border border-zinc-700 bg-zinc-900 p-3'
    >
      <input
        type='checkbox'
        checked={checked}
        onChange={() => handleCheck(id)}
        className='size-4 accent-indigo-400'
      />

      <p
        className={`text-white transition-colors ${checked && "text-zinc-400"}`}
      >
        {children}
      </p>
      <div className='ml-auto flex gap-1.5'>
        <div className='flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400'>
          &times;
          <span>{time}</span>
        </div>
        <button
          onClick={() => removeElement(id)}
          className='rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200'
        >
          <CancelIcon />
        </button>
      </div>
    </motion.div>
  );
};
