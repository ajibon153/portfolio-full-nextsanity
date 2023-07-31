import type { NextPage } from 'next';
import React from 'react';
import styles from '../styles/Home.module.scss';
import { motion, useCycle, AnimatePresence } from 'framer-motion';

import { About, Footer, Header, Skills, Testimonial, Work } from '../container';
import { Navbar } from '../components';
import { NavigationDots, SocialMedia } from '../components';
import { useRef } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getSkillData } from '../helpers/api';
// import { useDimensions } from '../components/Screen/use-dimensions';
import DetailExperience from '../container/Skills/DetailExperience';
import { MenuToggle } from '../components/Screen/MenuToggle';
import SideScreen from '../components/Screen/SideScreen';
import Sidebar from '../components/Screen/Sidebar';
import { useDimensions } from '../components/Screen/use-dimensions';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Home: NextPage = () => {
  const [open, toggleOpen] = useCycle(false, true);
  const [sideBar, setSideBar] = React.useState(false);
  const [sideBarData, setSideBarData] = React.useState({});
  const [Portfolio, setPortfolio] = React.useState([]);
  const containerRef = useRef(null);
  const { height, width } = useDimensions(containerRef);

  const handleHideSidebar = () => {
    setSideBar(false);
    document.body.style.overflow = 'scroll';
  };

  return (
    <>
      {/* <main style={{ display: 'flex' }}>
        <AnimatePresence>
          {open && <SideScreen toggle={toggleOpen} />}
        </AnimatePresence>
      </main> */}
      <Sidebar
        sideBar={sideBar}
        setSideBar={handleHideSidebar}
        data={sideBarData}
        width={width}
      />
      <SocialMedia />
      <main
        className={styles.app}
        ref={containerRef}
        style={{ overflowX: sideBar ? 'hidden' : 'scroll' }}
      >
        <Navbar />
        <Header />
        <About />
        <Skills
          toggle={(data: any) => {
            console.log('open sidew', data);
            setSideBar(true);
            setSideBarData(data);
            document.body.style.overflow = 'hidden';
          }}
          Portfolio={Portfolio}
        />
        <Work setPortfolio={setPortfolio} />
        <Testimonial />
        <Footer />
      </main>
      <NavigationDots />
      <div className='copyright'>
        <p className='p-text'>@2022 Aji</p>
        <p className='p-text'>All rights reserved</p>
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   const querySkill = await queryClient.prefetchQuery(['skill'], () =>
//     getSkillData()
//   );
//   // const queryExp = await queryClient.prefetchQuery(['experience'], () =>
//   //   getSkillData()
//   // );

//   return {
//     props: {
//       Skills: querySkill,
//     },
//   };
// }

export default Home;
