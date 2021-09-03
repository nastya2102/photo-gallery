import '../styles/globals.scss'
import store from '../store';
import 'remixicon/fonts/remixicon.css'

const WrappedApp = ({Component, pageProps}) => (
  <Component {...pageProps} />
);

export default store.withRedux(WrappedApp);
