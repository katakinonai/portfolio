import React from 'react';
import PropTypes from 'prop-types';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch();

  return (
    <Link
      to={to}
      style={{
        color: match ? 'var(--clr-active)' : '#fff',
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default CustomLink;
