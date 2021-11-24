import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div><Component {...pageProps} this is a footer /><footer>
    <p>Ⓒ 2021 Macauley Stephenson</p>
  </footer>
  </div>
}

export default MyApp
