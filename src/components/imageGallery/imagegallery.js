import React from "react";

import {ImageGalleryItem} from "./imageGalleryItem/imagegalleryitem";


export const ImageGallery = ({ images }) => {
    return (
        <ul className="gallery">
            {images.map((image) => (
                <ImageGalleryItem
                    key={image.id}
                    smallImage={image.webformatURL}
                    largeImage={image.largeImageURL}
                    id={image.id}
                    description={image.tags}
                />
            ))}
        </ul>
    );
};