import axios from 'axios';

const API_KEY = '39947445-b137d581fb2e8c7b497617e38';

const fetchImage = async ({
    searchQuery = '',
    currentPage = 1,
    pageSize = 12
}) => {
    const response = await axios
        .get(`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=phot&page=${currentPage}&per_page=${pageSize}`);
    return response.data.hits;
};

export default fetchImage 