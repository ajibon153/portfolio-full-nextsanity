import { useEffect, useLayoutEffect, useState } from 'react';
import MenuList from '../Navbar/MenuData';
// import Router from 'next/router';
import { useRouter } from 'next/router';

// let hash = window.location.hash;

const NavigationDots = (props: any) => {
    const { active } = props;
    const [Active, setActive] = useState('home');
    const [ScrollY, setScrollY] = useState(0);

    const router = useRouter();

    let homeHeight: number | null = null;
    let aboutHeight: number | null = null;
    let skillsHeight: number | null = null;
    let workHeight: number | null = null;
    let contactHeight: number | null = null;

    useEffect(() => {
        // let hash = router.asPath;
        // if (hash) {
        //     hash = hash.split('/#')[1];
        //     setActive(hash);
        // } else setActive('home');
    }, []);

    useEffect(() => {
        // router.push('#' + Active);
    }, [Active]);

    useLayoutEffect(() => {
        let homeDiv: HTMLElement | null = document.getElementById('home');
        let aboutDiv: HTMLElement | null = document.getElementById('about');
        let skillsDiv: HTMLElement | null = document.getElementById('skills');
        let workDiv: HTMLElement | null = document.getElementById('work');
        let contactDiv: HTMLElement | null = document.getElementById('contact');

        let offseter = 200;

        homeHeight = homeDiv ? homeDiv.offsetTop : 0;
        aboutHeight = aboutDiv ? aboutDiv.offsetTop - offseter : 0;
        skillsHeight = skillsDiv ? skillsDiv.offsetTop - offseter : 0;
        workHeight = workDiv ? workDiv.offsetTop - offseter : 0;
        contactHeight = contactDiv ? contactDiv.offsetTop - offseter : 0;

        // console.log('homeHeight', parseInt(homeHeight));
        // console.log('aboutHeight', parseInt(aboutHeight));
        // console.log('skillsHeight', parseInt(skillsHeight));
        // console.log('workHeight', parseInt(workHeight));
        // console.log('contactHeight', parseInt(contactHeight));
    });

    useLayoutEffect(() => {
        function watchScroll() {
            window.addEventListener('scroll', logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener('scroll', logit);
        };
    });

    function logit() {
        let offsetWindow = window.pageYOffset;
        let section = 'home';

        if (offsetWindow >= contactHeight) {
            section = 'contact';
        } else if (offsetWindow >= workHeight) {
            section = 'work';
        } else if (offsetWindow >= skillsHeight) {
            section = 'skills';
        } else if (offsetWindow >= aboutHeight) {
            section = 'about';
        } else if (offsetWindow >= homeHeight) {
            section = 'home';
        } else {
            section = 'home';
        }

        console.log(section);
        setActive(section);

        // console.log(window.pageYOffset);
    }

    return (
        <div className='app__navigation'>
            {MenuList.map((menu, i) => (
                <a
                    key={menu + 'dot' + i}
                    href={`#${menu}`}
                    className={`app__navigation_dot ${
                        Active === menu ? 'active' : ''
                    }`}
                />
            ))}
        </div>
    );
};

export default NavigationDots;
