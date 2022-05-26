import React, { Fragment } from "react";
import { TextSlideTop } from "../framer";
import Working from "../animations/working";
import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';

export const Hero = () => {
return (
<Box>
<SimpleGrid p={"4rem"} columns={[1,2]} >
<Flex className="animation" display={["block", "none"]}  alignContent="flex-start" alignItems="center">
<Working/>
</Flex>
<Box display="flex" alignContent="center" alignItems="center">
<TextSlideTop>
<Stack>
<Text as="h1" lineHeight={["1", "2"]} fontSize={["2.5rem", "5rem"]} >
Jamstack Development Agency
</Text>
<Text as="p" mt={"1rem"} fontSize={["1rem", "2rem"]}>
A new way to build websites and apps.
Increase conversion and attract more users with superfast and SEO-friendly pages. 
Jamstack is a modern approach to building fast, secure, and cost-effective websites and apps. 
It combines the performance and security benefits of a static website, with the power and flexibility of headless CMS and a best-of-breed microservices architecture.   
</Text>
</Stack>
</TextSlideTop>
</Box>
<Flex className="animation" display={["none", "block"]}  alignContent="flex-start" alignItems="center">
<Working/>
</Flex>
</SimpleGrid>
</Box>
)
}