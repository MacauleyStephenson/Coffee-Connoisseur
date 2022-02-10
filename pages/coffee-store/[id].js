import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import CoffeeStoresData from '../../data/coffee-stores.json';

import styles from '../../styles/coffee-store.module.css';

export function getStaticProps(staticProps) {
	const params = staticProps.params;
	console.log('params', params);
	return {
		props: {
			CoffeeStore: CoffeeStoresData.find(coffeeStore => {
				return coffeeStore.id.toString() === params.id;//dynamic id
			})
		}
	}
}

export function getStaticPaths() {
	const paths = CoffeeStoresData.map((coffeeStore) => {
		return {
			params: {
				id: coffeeStore.id.toString(),
			},
		};
	});
	return {
		paths,
		fallback: true,
	};
}

const CoffeeStore = (props) => {
	const router = useRouter();
	console.log('router', router);

	if (router.isFallback) {
		return <div>Loading...</div>
	}

	const { address, name, neighbourhood, imgUrl } = props.CoffeeStore;

	console.log('props', props);
	return (
		<div className={styles.layout}>
			<Head>
				<title>{name}</title>
			</Head>
			<div className={styles.container}>
			<div className={styles.col1}>
				Coffee Store Page {router.query.id}
				<div className={styles.backToHomeLink}>
				<Link href="/">
					<a>Back to home</a>
				</Link>
				</div>
				<Link href="/coffee-store/dynamic">
					<a>Go to page dynamic</a>
				</Link>
				<div className={styles.nameWrapper}>
				<h1 className={styles.name}>{name}</h1>
				</div>
				<Image
				src={imgUrl}
				width={600}
				height={360}
				className={styles.storeImg}
				alt={name}>
				</Image>
			</div>

			<div className={styles.col2}>
				<p>{address}</p>
				<p>{neighbourhood}</p>
			</div>
			</div>
		</div>
	);
};

export default CoffeeStore;