import axios from "axios";

const URL = 'https://pixabay.com/api/';

export const getImages = async (imageName, pageNumber) => {
    try {
        return await axios.get(URL, {
        params: {
            key: '39947445-b137d581fb2e8c7b497617e38',
            q: imageName,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            page: pageNumber,
        }
    })
    } catch (error) {
      console.log(error);  
    }
};