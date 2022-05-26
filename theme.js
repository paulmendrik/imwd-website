import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const colors = {
    background: '#000000',
    displayColor: '#FFFFFF',
    textPrimary: '#D1D5DB',
    textSecondary: '#8F9094',
    button1: '#3CCF91',
    button2: '#F6A20E',
    button3: '#5132BF',
    borderColor: '#111111',
}

const breakpoints = createBreakpoints({
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '80em',
    xl: '80em',
})

const theme = extendTheme({
    config,
    breakpoints,
    colors,
})

export default theme