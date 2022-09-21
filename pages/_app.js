import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
