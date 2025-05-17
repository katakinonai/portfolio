import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Not Found</h1>
    </motion.div>
  );
}

NotFound.propTypes = {};
