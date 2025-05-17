import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from './Slider';
import Content from './Content';

import RatingMain from '../images/interactive rating component/interactive-rating-component-rating.png';
import RatingThankYou from '../images/interactive rating component/interactive-rating-component-thank-you.png';

const ImagesDesktop = [RatingMain, RatingThankYou];

const ImagesMobile = [];

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
        <h1>{Content[5].title}</h1>
        <p>{Content[5].subtitle}</p>
      </div>

      <Slider ImagesDesktop={ImagesDesktop} ImagesMobile={ImagesMobile} />

      <p>{Content[5].text[0].content}</p>
      <p>{Content[5].text[1].content}</p>
      <ul>
        {Content[5].text[2].content.map((item) => {
          return <li key={item.id}>{item.content}</li>;
        })}
      </ul>
    </motion.div>
  );
}

App.propTypes = {};
