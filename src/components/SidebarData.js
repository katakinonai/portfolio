import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/#top',
    icon: <AiIcons.AiFillHome className="nav-icon" />,
    className: 'nav-text',
  },
  {
    title: 'Web',
    path: '/#web',
    icon: <AiIcons.AiOutlineGlobal />,
    className: 'nav-text',
  },
  {
    title: 'About',
    path: '/#about',
    icon: <AiIcons.AiOutlineSearch />,
    className: 'nav-text',
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <IoIcons.IoIosDocument />,
    className: 'nav-text',
  },
];
