import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import CoffeeStoresData from '../../data/coffee-stores.json';

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
	return {
		paths: [
			{ params: { id: '0' } },
			{ params: { id: '1' } }
		],
		fallback: true,
	};
}

const CoffeeStore = (props) => {
	const router = useRouter();
	console.log('router', router);

	const { address, name, neighbourhood } = props.CoffeeStore;

	if (router.isFallback) {
		return <div>Loading...</div>
	}


	console.log('props', props);
	return (
		<div>
			Coffee Store Page {router.query.id}
			<Link href="/">
				<a>Back to home</a>
			</Link>
			<Link href="/coffee-store/dynamic">
				<a>Go to page dynamic</a>
			</Link>
			<p>{address}</p>
			<p>{name}</p>
			<p>{neighbourhood}</p>
		</div>
	);
};

export default CoffeeStore;