// import "./styles/global.css";
import { CartProvider, useCart } from "react-use-cart";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <CartProvider> <Component {...pageProps} /> </CartProvider>
}
