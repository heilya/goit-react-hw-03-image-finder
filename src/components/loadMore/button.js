import React from "react";


export const Button =({onClick}) => {
    return (
        <div>
            <button type ="button" onClick={onClick}>Load more</button>
        </div>
    );
};