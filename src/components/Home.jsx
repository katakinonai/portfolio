import React from 'react';
import Header from './Header';
import Web from './Web';
import About from './About';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <Web />
      <About />
    </motion.div>
  );
};

Home.propTypes = {};

export default Home;
