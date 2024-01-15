import Document, { Head, Html, Main, NextScript } from 'next/document'

// styledComponents를 사용하기 위한 참조
import { ServerStyleSheet } from 'styled-components'

class MyClass extends Document {

    /**
     * 초기화 함수(고정코드)
     * 컴포넌트 전역에서 styledComponent를 사용할 수 있게 한다.
     */
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        // Run the React rendering logic synchronously
        ctx.renderPage = () => originalRenderPage({
            // Useful for wrapping the whole react tree
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            // Useful for wrapping in a per-page basis
            enhanceComponent: (Component) => Component,
        });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: [initialProps.styles, sheet.getStyleElement()]
        }
    }

    /**
     * 화면 렌더링 함수 -> Html, Head, Main 첫 글자가 대문자영어 주의
     */
    render() {
        return (
            <Html>
                <Head>
                    <title>Hello Next.js</title>

                    {/* getInitialProps에서 리턴한 styleTags를 출력한다. */}
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default MyClass;
