import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
//we are not using relative instead we use absolute using jsconfig baseUrl.
import Header from 'components/layout/Header'
//we are using here with json config paths alias 
import Footer from '@/layout/Footer' 
import '../styles/layout.css'
import Head from 'next/head'
import Navbar from '../components/navigation/Navibar'
import '../components/navigation/Navibar.css'
import { Provider } from 'next-auth/client'

const theme = {
  colors: {
    primary: '#355C7D'
  }
}

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        </ThemeProvider>
        </Provider>)
  }
  return (
      <Provider session={pageProps.session}>
        <Head>
            <title>Next JS Tutorials</title>
            <meta name='description' content='Codereveloution youtube channel tutorials'></meta>
        </Head>
        <Header/>
        <Navbar />

        <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        </ThemeProvider>
        <Footer/>
      </Provider>
    )
}

export default MyApp
