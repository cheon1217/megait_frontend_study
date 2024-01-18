import Document, { Html, Head, Main, NextScript } from 'next/document'

// styledComponent를 사용하기 위한 참조
import { ServerStyleSheet } from 'styled-components';

class MyClass extends Document {

    /**
     * 초기화 함수(고정코드)
     * 컴포넌트 전역에서 styledComponent를 사용할 수 있게 한다.
     */
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            enhanceComponent: (Component) => Component,
        });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: [initialProps.styles, sheet.getStyleElement()]
        }
    }

    /**
     * 화면 렌더링 함수 -> Html, Head, Main 첫 글자가 대문자임에 주의
     */
    render() {
        return (
            <Html>
                <Head>
                    {/* 구글 웹폰트 적용 */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                    {/* font awesome */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
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