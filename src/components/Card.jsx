import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({ image, title, text, linkUrl }) => {
  return (
    <motion.div className="card" initial="hidden" whileInView="visible">
      <img src={image} className="round-img" alt="project" />
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={linkUrl} className="card-btn">
        <span>Details</span>
      </Link>
    </motion.div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
