import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
 import Protected from '../components/Protected'
function MyApp({ Component, pageProps }) {
  return (
    <Protected?></Protected>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  )
}

export default MyApp
