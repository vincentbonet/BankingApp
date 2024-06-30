import axios from 'axios';

const API_KEY='SOME_API_KEY';

export const fetch = async (symbol) => {
    const response = await axios.get('some/api/endpoint',)
    return response.data.map(item => ({
        date: item.date,
        price: item.close,
    }))
}
