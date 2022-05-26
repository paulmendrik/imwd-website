import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
render() {
return (
<Html lang='en'>
<Head>
<meta charSet='utf-8' />
<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
<link rel='icon' type='image/svg+xml' href='favicon.svg' />
</Head>
<body>
<ColorModeScript />
<Main />
<NextScript />
</body>
</Html>
)
}
}