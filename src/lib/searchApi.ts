import axios from 'axios';

/**
 * For simplicity, I'm using a basic API library instead of RTK-Q. For an example of RTK-Q, see 
 * @param query 
 */
export async function searchApi(query: string): Promise<unknown[]> {
	return await axios.post(
		'https://rocketapi-for-developers.p.rapidapi.com/instagram/user/search HTTP/1.1',
		{
			data: { query },
			// baseURL:'',
			headers: {
				'X-Rapidapi-Key': 'ba3b2a31d6msh094e26bf4ff14e3p11530fjsnefda12dbfccc',
				'X-Rapidapi-Host': 'rocketapi-for-developers.p.rapidapi.com',
				'Content-Type': 'application/json',
				Host: 'rocketapi-for-developers.p.rapidapi.com',
			},
			// params:{}
		}
	);
}
