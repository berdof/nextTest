import Document, {Head, Main, NextScript} from 'next/document';
import {StyleSheetServer} from 'aphrodite';

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    const {html, css} = StyleSheetServer.renderStatic(() => renderPage())
    return {...html, css}
  }

  render() {
    return (
      <html>
      <Head>
        <title>My page</title>
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico"/>

        <style dangerouslySetInnerHTML={{__html: this.props.css.content}}/>

      </Head>
      <body>
      <Main />
      <audio id="scSong" autoPlay/>
      <NextScript />
      </body>
      </html>
    )
  }
}
