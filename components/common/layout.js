import React, { Fragment } from 'react';
import { Hero } from "components/content/hero";
import { Box } from '@chakra-ui/react';
import {Footer, Header } from '.';



export const Layout = ({ children }) => {

return (
<Fragment>
<Header/>
<Hero/>
<Box
px={["1rem", "4rem"]} 
py={"1rem"} 
width="full"
>
{children}    
</Box>
<Footer/>
</Fragment>
)
}