import { useEffect, useState } from 'react';

// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../layout/wrapper';
import { urlFor, client } from '../../store/client';
import { capitalizeFirstLetter } from '../../utility/text';

import style from './Skills.module.scss';
import { dateToIndonesia } from '../../utility/dateParse';
import { LoadingRoller } from '../../components/Loading/Loading';

const Skill = () => {
    const [Skills, setSkills] = useState<any | undefined>([]);
    const [LoadingSkills, setLoadingSkills] = useState<boolean>(true);
    const [LoadingExperiences, setLoadingExperiences] = useState<boolean>(true);
    const [Experiences, setExperiences] = useState<any | undefined>([]);

    useEffect(() => {
        const expQuery = '*[_type == "workExperience"]';
        const skillQuery = '*[_type == "skills"]';

        client.fetch(expQuery).then((response) => {
            response = response
                .map((dt: any) => {
                    let start = new Date(dt.start);
                    let experience, months;
                    let end = dt.present ? new Date() : new Date(dt.end);

                    months = (end.getFullYear() - start.getFullYear()) * 12;
                    months -= start.getMonth();
                    months += end.getMonth();

                    let years = Math.floor(months / 12);
                    let monthLeft = months % 12;
                    experience = `${years > 0 ? years + ' Yr' : ''} ${
                        monthLeft > 0 ? monthLeft + ' Mo ' : ''
                    }`;

                    return { ...dt, end, experience };
                })
                .reduce(
                    (entryMap: any, e: any) =>
                        entryMap.set(e.end.getFullYear(), [
                            ...(entryMap.get(e.end.getFullYear()) || []),
                            e,
                        ]),
                    new Map()
                );

            let mapped = [...response]
                .map((res) => ({
                    years: res[0],
                    works: res[1],
                }))

                .sort((a: any, b: any) => b.years - a.years);

            setExperiences(mapped);
            setLoadingExperiences(false);
        });

        client.fetch(skillQuery).then((response) => {
            const groupBy = response.reduce(
                (entryMap: any, e: any) =>
                    entryMap.set(e.group, [
                        ...(entryMap.get(e.group) || []),
                        e,
                    ]),
                new Map()
            );
            let newMap = [...groupBy]
                .map((item: any) => {
                    let id = 6;
                    if (item[0] === 'framework') id = 1;
                    if (item[0] === 'language') id = 2;
                    if (item[0] === 'style') id = 3;
                    if (item[0] === 'database') id = 4;
                    if (item[0] === 'tech') id = 5;

                    return {
                        id,
                        groupName: item[0],
                        value: item[1],
                    };
                })
                .sort((a, b) => a.id - b.id);

            setSkills(newMap);
            setLoadingSkills(false);
        });
    }, []);

    return (
        <div id='skills' className='app__flex'>
            <h2 className='head-text'>Skills & Experience</h2>

            <div className={style.app__skills_container}>
                <motion.div
                    whileInView={{
                        opacity: [0, 1],
                    }}
                    transition={{ duration: 0.5 }}
                    className={style.app__skills_list}
                >
                    {LoadingSkills ? (
                        <LoadingRoller />
                    ) : (
                        <>
                            {Skills.map((skills: any, i: number) => (
                                <div
                                    className=''
                                    style={{ width: '100%', margin: '2rem 0' }}
                                    key={skills.groupName + i}
                                >
                                    <h4
                                        className='bold-text'
                                        style={{ margin: '1rem' }}
                                    >
                                        {capitalizeFirstLetter(
                                            skills.groupName
                                        )}
                                    </h4>
                                    <div
                                        className={`app__flex ${style.app__skill_group}`}
                                    >
                                        {skills.value.map(
                                            (skill: any, i: number) => {
                                                if (!skill.hidden)
                                                    return (
                                                        <motion.div
                                                            whileInView={{
                                                                opacity: [0, 1],
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                            }}
                                                            className={`${style.app__skills_item} app__flex`}
                                                            key={
                                                                skills.groupName +
                                                                skill.name +
                                                                i
                                                            }
                                                        >
                                                            <div
                                                                className='app__flex'
                                                                style={{
                                                                    backgroundColor:
                                                                        skill.bgColor,
                                                                    boxShadow:
                                                                        '5px 5px 10px rgb(0 0 0 / 20%)',
                                                                }}
                                                            >
                                                                <img
                                                                    src={urlFor(
                                                                        skill.icon
                                                                    )}
                                                                    alt={
                                                                        skill.name
                                                                    }
                                                                    width={50}
                                                                />
                                                            </div>
                                                            <p className='p-text'>
                                                                {skill.name}
                                                            </p>
                                                        </motion.div>
                                                    );
                                            }
                                        )}
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </motion.div>
                <div
                    className={style.app__skills_exp}
                    style={
                        LoadingExperiences
                            ? { alignItems: 'center' }
                            : { marginTop: '2rem' }
                    }
                >
                    {LoadingExperiences ? (
                        <LoadingRoller />
                    ) : (
                        <>
                            {Experiences.map((experience: any, i: number) => (
                                <motion.div
                                    className={style.app__skills_exp_item}
                                    key={'exp' + experience.years + '_' + 1}
                                    whileInView={{
                                        opacity: [0, 1],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                    }}
                                >
                                    <div
                                        className={style.app__skills_exp_year}
                                        style={{ marginTop: '1rem' }}
                                    >
                                        <p className='bold-text'>
                                            {experience.years}
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            width: '100%',
                                        }}
                                    >
                                        {experience.works.map((work: any) => (
                                            <div
                                                key={work.company}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent:
                                                        'space-between',
                                                    marginTop: '1rem',
                                                }}
                                            >
                                                <motion.div
                                                    className={
                                                        style.app__skills_exp_works
                                                    }
                                                >
                                                    <motion.div
                                                        className={
                                                            style.app__skills_exp_work
                                                        }
                                                        data-tip
                                                        data-for={work.name}
                                                    >
                                                        <h4 className='bold-text'>
                                                            {work.name}
                                                        </h4>
                                                        <p
                                                            className='p-text'
                                                            style={{
                                                                fontWeight: 600,
                                                            }}
                                                        >
                                                            {work.company}
                                                        </p>
                                                    </motion.div>
                                                    <div
                                                        className={
                                                            style.app__experience_detail
                                                        }
                                                    >
                                                        <MdOutlineOpenInNew />
                                                    </div>
                                                </motion.div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// export default AppWrap(Skill, 'skills');
export default AppWrap(
    MotionWrap(Skill, 'app__skills'),
    'skills',
    'app__whitebg'
);
