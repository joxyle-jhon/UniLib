import { menuItems } from '@/utils/constant';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Navigation = () => {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    console.log({ pathname });

    const handleClick = ({index, path}) => {
        debugger;
        setCurrentIndex(index)
        navigate(path)
    }
  return (
    <ul className="p-2">
        {menuItems.map(({title,path}, index) => {
            return (
                <li 
                    key={title}
                    className={` my-2 p-2 rounded-lg cursor-pointer hover:bg-cyan-600 hover:text-white 
                        ${currentIndex === index || pathname === path 
                            ? "bg-cyan-600 text-white" 
                            : ""
                }`}
                onClick={() => handleClick({index, path})}
                >
                <Link to={path}>{title}</Link>
            </li>
            )
        })}
    </ul>
  );
};

export default Navigation;
