import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const GoToBackPageLink: React.FC = () => (
    <div className='go-to-back-button'>
        <Link to='/'>
            <FaArrowLeft />
        </Link>
    </div>
);

export default GoToBackPageLink;