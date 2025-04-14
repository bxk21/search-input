import { Item } from "@/lib/def";
import Image from "next/image";
import { Key } from "react";
import styles from "../app/page.module.css";

export default function CardItem(props: { item: Item }) {
	const {
		item
	} = props;
	return <li className={styles.card}>
		<div>
			<Image src={item.profile_pic_url} alt="" width={64} height={64}/>
		</div>
		<div>
			<div className={styles.vertical}>
				UserName:
				{item.username}
			</div>
			<div className={styles.vertical}>
				Name:
				{item.fullname}
			</div>
		</div>
	</li>;
}