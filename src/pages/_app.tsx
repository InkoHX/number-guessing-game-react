import { AppProps } from 'next/app'

import { Container, Navbar } from '../components'

const App: React.FC<AppProps> = ({
  pageProps,
  Component
}) => (
    <>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </>
  )

export default App
