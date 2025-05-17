import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from './Slider';
import Content from './Content';

import IntroDesktop from '../images/intro section/intro-desktop.png';
import IntroDesktopToggled from '../images/intro section/intro-desktop-toggled.png';
import IntroMobile from '../images/intro section/intro-mobile.png';
import IntroMobileNav from '../images/intro section/intro-mobile-nav.png';
import IntroNavToggled from '../images/intro section/intro-nav-toggled.png';

const ImagesDesktop = [IntroDesktop, IntroDesktopToggled];

const ImagesMobile = [IntroMobile, IntroMobileNav, IntroNavToggled];

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-page"
    >
      <div className="project-header">
        <h1>{Content[4].title}</h1>
        <p>{Content[4].subtitle}</p>
      </div>

      <Slider ImagesDesktop={ImagesDesktop} ImagesMobile={ImagesMobile} />

      <p>{Content[4].text[0].content}</p>
      <p>{Content[4].text[1].content}</p>
      <ul>
        {Content[4].text[2].content.map((item) => {
          return <li key={item.id}>{item.content}</li>;
        })}
      </ul>
    </motion.div>
  );
}

App.propTypes = {};
