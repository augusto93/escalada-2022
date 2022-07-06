import '../styles/globals.css'
import LoadingScreen from "../components/LoadingScreen"
import React from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() =>{
    setTimeout(() => setLoading(false), 1800);
   });

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default MyApp