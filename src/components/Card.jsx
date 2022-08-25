import React from 'react'
import { Link } from "react-router-dom";
import textAnimationY from "./animations/textAnimationY";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";

const Card = ({ image, title, text, linkUrl }) => {
    return (
        <motion.div 
            className="card"
            initial="hidden"
            whileInView="visible"
        >
            <img src={image} className="round-img" />
            <h3>{title}</h3>
            <p>{text}</p>
            <Link to={linkUrl} className="card-btn"><span>Details</span></Link>
        </motion.div>
    );
}

export default Card