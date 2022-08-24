import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
// import Protected from '../components/Protected'
import 
function MyApp({ Component, pageProps }) {
  return (
   
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  )
}

export default MyApp
