import Document, { Head, Main, Html, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preload" href="/fonts/IBMPlexSans-Bold.ttf" as="font" crossOrigin="annonymous"></link>
					<link rel="preload" href="/fonts/IBMPlexSans-Regular.ttf" as="font" crossOrigin="annonymous"></link>
					<link rel="preload" href="/fonts/IBMPlexSans-SemiBold.ttf" as="font" crossOrigin="annonymous"></link>
				</Head>
				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;