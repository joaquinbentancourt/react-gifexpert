import { useEffect, useState } from "react";
import { getGifts } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);  // <-- dependencias vacias, eso solo pasa cuando se crear el compomente 

    return {
        images,
        isLoading,
    };
}
