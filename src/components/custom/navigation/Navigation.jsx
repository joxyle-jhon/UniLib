import { menuItems } from '@/utils/constant';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navigation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <ul className="p-2">
        {menuItems.map(({title,path}, index) => {
            return (
                <li 
                    className={` my-2 p-2 rounded-lg cursor-pointer hover:bg-cyan-600 hover:text-white ${currentIndex === index ? "bg-cyan-600 text-white" : ""

                }`}
                >
                <Link to={path}>{title}</Link>
            </li>
            )
        })}
    </ul>
  );
};

export default Navigation;
