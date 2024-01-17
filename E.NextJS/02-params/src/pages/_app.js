import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Meta from "@/components/Meta"
import GlobalStyle from "@/styles/GlobalStyle"

const App = ({Component, pageProps}) => {
    return (
        <>
            <Meta />
            <GlobalStyle />
            <Header title="02-params" />
            <Component {...pageProps} />
            <Footer />
        </>
    
    )
}

export default App;

