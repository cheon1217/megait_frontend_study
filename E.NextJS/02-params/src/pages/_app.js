import Footer from "@/components/Footer"
import Header from "@/components/Header"

const App = ({Component, pageProps}) => {
    return (
        <>
            <Header title="02-params" />
            <Component {...pageProps} />
            <Footer />
        </>
    
    )
}

export default App;

