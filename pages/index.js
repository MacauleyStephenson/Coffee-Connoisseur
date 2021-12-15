import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner';
import Card from '../components/card';
import coffeeStore from '../data/coffee-stores.json';

export default function Home() {
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
				<Image src="/static/hero-image.png" width={700} height={400}/>
				</div>
				<div className={styles.cardLayout}>
				{coffeeStore.map((coffeeStore) => {
				return (
				<Card
				name={coffeeStore.name}
				imgUrl="/static/hero-image.png"
				href="/coffee-store/darkhorse-coffee"
				/>
				);
				})}
			</div>
			</main>
		</div>
	)
}
