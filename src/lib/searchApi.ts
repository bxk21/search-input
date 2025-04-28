import axios, { AxiosError } from 'axios';
import { Item } from './def';
import exampleResponse from './exampleResponse';

/**
 * For simplicity, I'm using a basic API library instead of RTK-Q. For an example of RTK-Q, see https://github.com/bxk21/rtkq
 * The API call gets a 401 error with the message: "Invalid API key. Go to https://docs.rapidapi.com/docs/keys for more info."
 * This isn't something I can fix on my end, so I'm spoofing test data below.
 */
export async function searchApi(query: string): Promise<Item[] | undefined> {
	try {
		// return exampleResponse.data.response.body.users
		return await axios.post( // FIXME: Why is the spec a POST call? Shouldn't this be a GET?
			'https://v1.rocketapi.io/instagram/user/search',
			{ query },
			{
				headers: {
					'Authorization': 'Token DLjgzYxxQpZDuOeBAI2WgQ',
					'Content-Type': 'application/json',
				},
			},
		).then((response) => {
			// console.log('response', response);
			return response.data.response.body.users
		});
	} catch(e) {
		if ((e as AxiosError).response?.status === 401) {
			return [
				{full_name: 'Bo Kang', username: 'bkang', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'Not Bo Kang', username: 'n_bkang', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'Definitely Not Bo Kang', username: 'dn_bkang', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'Ok, it\'s Bo Kang', username: 'ok_bkang', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User A', username: 'userA', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User B', username: 'userB', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User C', username: 'userC', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User D', username: 'userD', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User E', username: 'userE', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User F', username: 'userF', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User G', username: 'userG', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User H', username: 'userH', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User I', username: 'userI', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User J', username: 'userJ', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User K', username: 'userK', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User L', username: 'userL', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User M', username: 'userM', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
				{full_name: 'User N', username: 'userN', profile_pic_url: 'https://bxk21.vercel.app/_next/image?url=%2Fphotos%2Fside.jpg&w=1080&q=75'},
			];
		}
	}
}
