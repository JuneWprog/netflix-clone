import axios from 'axios';
import {ENV_VARS} from '../config/envVars.js';
export const fetchFromTMDB = async (url) => {
    const response = await axios.get(url,
        {headers: {
            accept: "application/json",
			Authorization: "Bearer " + ENV_VARS.TMDB_API_KEY,
        },}
    )
    if (response.status !== 200) {
        throw new Error('Failed to fetch data from TMDB API');
    }
    return response.data;
}

    