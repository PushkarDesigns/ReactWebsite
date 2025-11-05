import React from "react";

const Destination = ({ img, title, places }) => {
    return (
        <div className="container">
            <img src={img} alt={title} className="destination-img" />
            <h4>{title}</h4>
            <p>{places}</p>
        </div>
    );
};

export default Destination;
