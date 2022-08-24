import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
// import Protected from '../components/Protected'
import AuthContextProvider from '../contexts/authContext'
function MyApp({ Component, pageProps }) {
  return (
   AuthContextProvider
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  )
}

export default MyApp
