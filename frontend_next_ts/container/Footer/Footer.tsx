import Image from 'next/future/image';
import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../layout/wrapper';
import { client } from '../../helpers/client';
import style from './Footer.module.scss';

const Footer = () => {
  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <div id='contact' className={`${style.app__footer} app__flex`}>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className={style.app__footer_cards}>
        <div className={style.app__footer_card}>
          <Image src={images.email} alt='email' />
          <a href='mailto:ajimuhfauji95@gmail.com' className='p-text'>
            ajimuhfauji95@gmail.com
          </a>
        </div>
        <div className={style.app__footer_card}>
          <Image src={images.mobile} alt='phone' />
          <a href='tel:+62 812 9314 0649' className='p-text'>
            +62 812 9314 0649
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className={`${style.app__footer_form} app__flex`}>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='username'
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
