import React from 'react';

const LandingComponent = ({ img, className }) => {
    return (
        <div className={`${className}`}>
            <img
                src={img}// Directly use img here
                alt="Sample"
                className="w-64 h-auto rounded-lg shadow-md"
            />
        </div>
    );
};

export default LandingComponent;
