import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import cls from 'classnames';

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

	const handleUpvoteButton = () => {
		console.log('handle upload')
	};

	console.log('props', props);
	return (
		<div className={styles.layout}>
			<Head>
				<title>{name}</title>
			</Head>
			<div className={styles.container}>
			<div className={styles.col1}>
				<div className={styles.backToHomeLink}>
				<Link href="/">
					<a>Back to home</a>
				</Link>
				</div>
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

			<div className={cls("glass", styles.col2)}>
				<div className={styles.iconWrapper}>
					<Image src="/static/icons/places.svg" width="24" height="24" />
					<p className={styles.text}>{address}</p>
				</div>
				<div className={styles.iconWrapper}>
					<Image src="/static/icons/nearMe.svg" width="24" height="24" />
					<p className={styles.text}>{neighbourhood}</p>
				</div>
				<div className={styles.iconWrapper}>
					<Image src="/static/icons/star.svg" width="24" height="24" />
					<p className={styles.text}>1</p>
				</div>

				<button className={styles.upvoteButton} onClick={handleUpvoteButton}>Up vote!</button>
			</div>
			</div>
		</div>
	);
};

export default CoffeeStore;