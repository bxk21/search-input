'use client'

import { searchApi } from "@/lib/searchApi";
import styles from "./page.module.css";
import { ClipboardEvent, ClipboardEventHandler, CompositionEvent, FormEvent, FormEventHandler, SyntheticEvent, useEffect, useState } from "react";
import CardItem from "@/components/CardItem";
import { Item } from "@/lib/def";

export default function Search() {
	const [searchTerm, setSearchTerm] = useState<string>();
	const [searchResults, setSearchResults] = useState<Item[]>();

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

	/**
	 * Triggers beforeInput because specifications imply directly preventing the user from typing invalid input.
	 * The Typing of this function is wrong, so I have to coerce it. See https://stackoverflow.com/a/68108756/8116160
	 */
	const fixInput = (event: SyntheticEvent) => {
		// event.currentTarget.value.length > 30 // Removed: Redundant to maxLength
		if ((event as CompositionEvent).data.match(/[^a-zA-Z0-9]+/)) { // Prevents non-alphanumeric characters. Fulfills requirement 1A
			// console.log('prevented', event.cancelable, event.isPropagationStopped());
			event.preventDefault();
			event.stopPropagation();
		}
	};

	/**
	 * Prevents pasting into the input. Fulfills requirement 1C
	 * This works on Chromium, but doesn't work on Firefox for me, but that's probably because I disabled that in my personal browser.
	 */
	const preventPaste: ClipboardEventHandler<HTMLInputElement> = (event: ClipboardEvent<HTMLInputElement>) => {
		// console.log('paste prevented', event.cancelable, event.isPropagationStopped());
		event.preventDefault();
		event.stopPropagation();
	}

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<form action={submitSearch}>
					<label> Search: </label>
					<input
						name="searchTerm"
						type="string"
						onPaste={preventPaste}
						maxLength={30} // Prevents the string from being longer than 30 characters. Fulfills requirements 1A & 1B
						required
						onBeforeInput={fixInput}
					/>
					<button type="submit">
						Search
					</button>
				</form>
				{searchResults && <ol className={styles.grid}>
					{searchResults.map((item, i) => <CardItem item={item} key={i}/>)}
				</ol>}
			</main>
		</div>
	);
}
