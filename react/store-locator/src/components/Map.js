import React from 'react';
import './Map.css';

function Map(props) {
    const imagePath = props.imagename ? `img/${props.imagename}` : "img/none.png";
    const imageDescription = props.location || "No store selected";

    return (
        <div className="MapBox">
            <img src={imagePath} alt={imageDescription} />
        </div>
    );
}

export default Map;
