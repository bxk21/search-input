import { Item } from "@/lib/def";
import Image from "next/image";
import { Key } from "react";
import styles from "../app/page.module.css";

export default function CardItem(props: { item: Item; key: Key; }) {
	const {
		item,
		key
	} = props;
	return <li key={key} className={styles.card}>
		<col>
			<Image src={item.profile_pic_url} alt=""/>
		</col>
		<col>
			<>
				UserName:
				{item.username}
			</>
			<>
				Name:
				{item.fullname}
			</>
		</col>
	</li>;
}