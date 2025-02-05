import axios from 'axios';

const API_URL = 'https://localhost:8000/api/CategoryRooms';

const CategoryRoomServices = {
    getCategoryRooms: () =>
        axios.get(API_URL).then((res) => res.data),
};

export default CategoryRoomServices;
