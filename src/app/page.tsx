'use client'

import { searchApi } from "@/lib/searchApi";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Search() {
	const [searchTerm, setSearchTerm] = useState<string>();
	const [searchResults, setSearchResults] = useState<unknown[]>();

	const submitSearch = (formData: FormData) => {
		setSearchTerm(formData.get('searchTerm') as string)
	};

	useEffect(() => {
		if (searchTerm) {
			(async () => {
				setSearchResults(await searchApi(searchTerm));
			})();
		}
	}, [searchTerm]);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<form action={submitSearch}>
					<label>
						Search: <input name="searchTerm" type="string"/>
					</label>
					<button type="submit">
						Search
					</button>
				</form>
				{searchResults && <ol>
					{searchResults.map((item, i) => <li key={i}>
						{JSON.stringify(item)}
					</li>)}
				</ol>}
			</main>
		</div>
	);
}
