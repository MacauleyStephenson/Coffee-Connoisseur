import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

import Banner from '../components/banner';
import Card from '../components/card';

import coffeeStoreData from '../data/coffee-stores.json';

export async function getStaticProps(context) {
	console.log("Hi getSaticProps");
	return {
		props: {
			coffeeStore: coffeeStoreData,
		},
	};
}

export default function Home(props) {
	console.log("props", props);

	const handleOnBannerBtnClick = () => {
		console.log("banner button clicked");
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Connoisseur</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner buttonText="View stores nearby!"
					handleOnClick={handleOnBannerBtnClick}
				/>
				<div className={styles.heroImage}>
					<Image src="/static/hero-image.png" width={700} height={400} />
				</div>

				{props.coffeeStore.length > 0 && (
					<>
						<h2 className={styles.heading2}>London Coffee Stores</h2>
						<div className={styles.cardLayout}>
							{props.coffeeStore.map((coffeeStore) => {
								return (
									<Card
										key={coffeeStore.id}
										name={coffeeStore.name}
										imgUrl={coffeeStore.imgUrl}
										href={`/coffee-store/${coffeeStore.id}`}
									/>
								);
							})}
						</div>
					</>
				)}
			</main>
		</div>
	)
}
