import "../styles/Global.css";
import "../styles/index.css";
import "../styles/Accardion.css";
import SimpleReactLightbox from "simple-react-lightbox";

export default function App({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}
