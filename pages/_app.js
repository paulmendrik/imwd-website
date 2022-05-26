import { AnimatePresence } from 'framer-motion'
import {CSSReset, ChakraProvider } from '@chakra-ui/react';
import '../styles/app.css';
import {Head} from '../components/common/head';
import theme from '../theme';


function MyApp({ Component, pageProps }) {
 
return (
<ChakraProvider theme={theme}>
<Head/>
<CSSReset/>
<AnimatePresence>
<Component {...pageProps} />
</AnimatePresence>
</ChakraProvider>
)
}

export default MyApp
