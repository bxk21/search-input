import axios from 'axios';
import { Item } from './def';

/**
 * For simplicity, I'm using a basic API library instead of RTK-Q. For an example of RTK-Q, see 
 * @param query 
 */
export async function searchApi(query: string): Promise<Item[]> {
	try {
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
	} catch(e) {
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
		]
	}
}
