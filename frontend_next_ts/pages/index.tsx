import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';
import { motion, useCycle } from 'framer-motion';

import { About, Footer, Header, Skills, Testimonial, Work } from '../container';
import { Navbar } from '../components';
import { NavigationDots, SocialMedia } from '../components';
import { useRef } from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getSkillData } from '../helpers/api';
import { useDimensions } from '../components/Screen/use-dimensions';
import DetailExperience from '../container/Skills/DetailExperience';
import { MenuToggle } from '../components/Screen/MenuToggle';

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
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <SocialMedia />
      <div className={styles.app}>
        <Navbar />
        <Header />
        <About />
        <Skills
          toggle={() => {
            console.log('open sidew');
            toggleOpen();
          }}
        />
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <motion.div className='background' variants={sidebar} />
          <DetailExperience />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        <Work />
        <Testimonial />
        <Footer />
      </div>
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
