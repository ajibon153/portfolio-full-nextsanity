import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';

import { About, Footer, Header, Skills, Testimonial, Work } from '../container';
import { Navbar } from '../components';

const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      {/* <Navbar /> */}
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
