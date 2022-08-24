import '../styles/globals.css'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'
// import Protected from '../components/Protected'
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

  )
}

export default MyApp
