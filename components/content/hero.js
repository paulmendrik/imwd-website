import React, { Fragment } from "react";
import { TextSlideTop } from "../framer";
import Working from "../animations/working";
import { Box, Flex, Heading, SimpleGrid,Text } from '@chakra-ui/react';

export const Hero = () => {
return (
<Box className="hero" p={["1rem","3rem"]} height={"auto"} >
<SimpleGrid columns={[1,2]} spacing={[4,6]} >
<Flex 
className="animation" 
display={["block", "none"]}  
justifyContent={"center"}
height={'100%'}
backgroundSize={'contain'} 
>
<Working/>
</Flex>
<Box display="flex" alignContent="center" alignItems="center">
<TextSlideTop>
<Heading as="h1"  mb={"0.25rem"} >Jamstack Development Agency</Heading>
<Text as="p">
A new way to build websites and apps.
Increase conversion and attract more users with superfast and SEO-friendly pages. 
Jamstack is a modern approach to building fast, secure, and cost-effective websites and apps. 
It combines the performance and security benefits of a static website, with the power and flexibility of headless CMS and a best-of-breed microservices architecture.   
</Text>
</TextSlideTop>
</Box>
<Flex 
className="animation" 
display={["none", "block"]}  
justifyContent={"center"}
height={'100%'}
backgroundSize={'contain'}
>
<Working/>
</Flex>
</SimpleGrid>
</Box>
)
}