import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
import Protected from '../components/Protected'
function MyApp({ Component, pageProps }) {
  return ()
  <Protected><Layout> <Component {...pageProps} /> </Layout></Protected>
}

export default MyApp
