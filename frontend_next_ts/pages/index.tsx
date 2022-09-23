import type { NextPage } from 'next';

import styles from '../styles/Home.module.scss';

import { About, Footer, Header, Skills, Testimonial, Work } from '../container';
import { Navbar } from '../components';
import { NavigationDots, SocialMedia } from '../components';
import { useRef } from 'react';

const Home: NextPage = () => {
    return (
        <>
            <SocialMedia />
            <div className={styles.app}>
                <Navbar />
                <Header />
                <About />
                <Skills />
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

export default Home;
