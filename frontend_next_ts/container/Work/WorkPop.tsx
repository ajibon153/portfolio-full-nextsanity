import { useEffect, useState } from 'react';
import Link from 'next/link';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../layout/wrapper';
import { urlFor, client } from '../../helpers/client';

import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Lightbox from 'react-image-lightbox';

import style from './Work.module.scss';
const WorkPop = (props: any) => {
  const { isOpen, PopImage, setPopImage, setIsOpen } = props;
  return (
    <>
      {isOpen && (
        <Lightbox
          key={PopImage._id}
          mainSrc={async () => await urlFor(PopImage.imgUrl)}
          mainSrcThumbnail={urlFor(PopImage.imgUrl)}
          clickOutsideToClose
          onCloseRequest={() => {
            setPopImage(null);
            setIsOpen(false);
          }}
          // discourageDownloads
        />
      )}
    </>
  );
};

export default WorkPop;
