import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
import AuthContextProvider from '../contexts/authContext'
import DrawContextProvider from '../contexts/drawContext'

function MyApp({ Component, pageProps }) {
  return (
    <DrawContextProvider>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </DrawContextProvider>
  )
}

export default MyApp
