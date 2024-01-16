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
                    {/*
                        <head>는 순수 HTML태그.
                        <Head>는 next.js의 컴포넌트.
                        이 안에서 charset과 viewport 지정은 자동으로 이루어진다.
                        그 외에 개발자가 적용하고자 하는 외부 CSS나 JS리소스 참조, SEO
                        구현등을 처리할 수 있다.
                    */}
                    {/* getInitialProps에서 리턴한 styleTags를 출력한다. */}
                    {this.props.styleTags}
                </Head>
                <body>
                    {/*
                        이 구조를 기본으로 적용한 상태에서 일반 페이지용 js들이 이 위
                        치에 출력된다.
                        만약 _app.js가 정의되어 있다면 _app.js의 구조를 먼저 적용한
                        후에 페이지가 표시된다.
                    */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default MyClass;