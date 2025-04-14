import axios, { AxiosError } from 'axios';
import { Item } from './def';

/**
 * For simplicity, I'm using a basic API library instead of RTK-Q. For an example of RTK-Q, see https://github.com/bxk21/rtkq
 * The API call gets a 401 error with the message: "Invalid API key. Go to https://docs.rapidapi.com/docs/keys for more info."
 * This isn't something I can fix on my end, so I'm spoofing test data below.
 */
export async function searchApi(query: string): Promise<Item[] | undefined> {
	try {
		return await axios.post( // FIXME: Why is the spec a POST call? Shouldn't this be a GET?
			'https://rocketapi-for-developers.p.rapidapi.com/instagram/user/search',
			{
				data: { query },
				headers: {
					'X-Rapidapi-Key': 'ba3b2a31d6msh094e26bf4ff14e3p11530fjsnefda12dbfccc',
					'X-Rapidapi-Host': 'rocketapi-for-developers.p.rapidapi.com',
					'Content-Type': 'application/json',
					Host: 'rocketapi-for-developers.p.rapidapi.com',
				},
			}
		);
	} catch(e) {
		if ((e as AxiosError).response?.status === 401) {
			return [
				{fullname: 'Bo Kang', username: 'bkang', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'Not Bo Kang', username: 'n_bkang', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'Definitely Not Bo Kang', username: 'dn_bkang', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'Ok, it\'s Bo Kang', username: 'ok_bkang', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User A', username: 'userA', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User B', username: 'userB', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User C', username: 'userC', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User D', username: 'userD', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User E', username: 'userE', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User F', username: 'userF', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User G', username: 'userG', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User H', username: 'userH', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User I', username: 'userI', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User J', username: 'userJ', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User K', username: 'userK', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User L', username: 'userL', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User M', username: 'userM', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{fullname: 'User N', username: 'userN', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
			];
		}
	}
}
