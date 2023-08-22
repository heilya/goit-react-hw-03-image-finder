import React from "react";

import {ImageGalleryItem} from "./imageGalleryItem/imagegalleryitem";


export const ImageGallery = () => {
    return(
        <ul className="gallery">
            <ImageGalleryItem/>
        </ul>
    );
};