import { useState } from 'react';
import Image from 'next/future/image';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import style from './Navbar.module.scss';

import MenuList from './MenuData';
import { images } from '../../constants';

const Navbar = () => {
    const [Toggle, setToggle] = useState(false);

    return (
        <nav className={style.app__navbar}>
            <div className={style.app__navbar_logo}>
                <Image src={images.logo} alt='logo' />
            </div>
            <ul className={style.app__navbar_links}>
                {MenuList.map((item, i) => (
                    <li key={`link-${i}`} className={`app__flex p-text`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className={style.app__navbar_menu}>
                <HiMenuAlt4 onClick={() => setToggle(!Toggle)} />
                {Toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul className={style.app__navbar_links}>
                            {MenuList.map((item) => (
                                <li
                                    key={`link-${item}`}
                                    className={`${style.app__flex} p-text`}
                                >
                                    <div />
                                    <a
                                        href={`#${item}`}
                                        onClick={() => setToggle(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
