import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import PopExperience from '../../container/Skills/popExperience';

function Sidebar({
  sideBar = false,
  setSideBar = () => {},
  data = {},
  width,
}: any) {
  console.log('data', data);
  console.log('width', width);

  return (
    <AnimatePresence>
      {sideBar && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            transition={{ duration: 0.4 }}
            // className='fixed bg-indigo-600 text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5'
            style={{
              position: 'fixed',
              backgroundColor: 'rgba(0,0,0,0.2)',
              top: 0,
              right: 0,
              width: '100%',
              padding: 5,
              height: '100vh',
              zIndex: 10,
              overflowY: 'scroll',
            }}
          >
            <motion.div
              initial={{ x: '110%' }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '110%',
              }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.4,
                delay: 0.3,
              }}
              style={{
                position: 'fixed',
                backgroundColor: 'white',
                top: 0,
                right: 0,
                width: width < 500 ? '100%' : '85%',
                padding: '3%',
                paddingRight: 0,
                height: '100vh',
              }}
            >
              <button
                onClick={() => setSideBar(!sideBar)}
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  height: 50,
                  width: 50,
                  display: 'block',
                  margin: 8,
                  borderRadius: '50%',
                  borderColor: 'transparent',
                  zIndex: 20,
                  position: 'fixed',
                  right: width < 500 ? '8%' : 'unset',
                  left: width < 500 ? 'unset' : '-35px',
                }}
              >
                &times;
              </button>
              <PopExperience exp={data.exp} Skills={data.Skills} />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: 'spring', bounce: 1, duration: 0.2 }}
            onClick={() => setSideBar(!sideBar)}
            className='bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0'
            style={{
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              padding: 5,
              // zIndex: 10,
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
