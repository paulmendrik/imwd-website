import React, {Fragment} from 'react';
import { ImageFadeIn } from "../framer/image-fade-in";
import { TextSlideTop } from "../framer/text-slide-top";
import { Box, Flex, Heading, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import {
SiGatsby, 
SiReact,
SiTypescript,
SiSvelte,
SiShopify, 
SiMagento, 
SiPrestashop, 
SiSellfy,
SiContentful,
SiStrapi,
SiNetlify,
SiStoryblok,
 } from 'react-icons/si'
import PortableText from 'react-portable-text';

export const Techno = ({ props }) => {

return (
<Fragment>
<Box p={["1rem","3rem"]} mb={["1rem", "2rem"]}  bg="#F4F8FD" width={'full'}>
<Heading as="h2" mb={"0.25rem"} >Web Technology</Heading>
<SimpleGrid  columns={[1,1]}  spacing={[0,2]}>
<Box>
<TextSlideTop>
<Text as="p">
We’re capable of turning your designs into fully-functional JAMstack websites that are lightning fast with minimal load times. 
We use the latest ultrafast and efficient frontend frameworks, including NextJS, React, Gatsby.
The tech world is full of changes which is why we make sure to adapt to new advancements as they come out, along with next generation CMS engines like Contentful, Sanity or Strapi, which adapt their delivery process based on how a visitor is accessing content. This allows us to optimize for mass scalability and high performance while at the same time providing a state-of-the-art user experience. 
</Text>
</TextSlideTop>
</Box>


<Box py={["1rem", "2rem"]} w={"100%"}>
<Text as="h4" pb={["1rem", "2rem"]}>Frontend Build</Text>
<ImageFadeIn>
<SimpleGrid  columns={4} >
<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiGatsby}  w={[12,32]} h={[12,32]}  color='#663399' />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]}>Gatsby</Text>
</Stack>
</Box>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiReact}w={[12,32]} h={[12,32]} color='#61dafb' />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >React</Text>
</Stack>
</Box>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiSvelte} w={[12,32]} h={[12,32]}  color='#FF3E00' />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Svelte</Text>
</Stack>
</Box>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiTypescript} w={[12,32]} h={[12,32]} color='#3178c6' />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Typescript</Text>
</Stack>
</Box>
</SimpleGrid>
</ImageFadeIn>
</Box>

<Box py={["1rem", "2rem"]} w={"full"} >
<Text as="h4"  pb={["1rem", "2rem"]} fontSize={["1rem", "1.75rem"]}>Headless eCommerce Integration</Text>
<ImageFadeIn>
<SimpleGrid columns={4}>
<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiShopify} w={[12,32]} h={[12,32]} color={'#96bf48'} />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Shopify</Text>
</Stack>
</Box>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiSellfy} w={[12,32]} h={[12,32]} color={"#00B140"} />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Sellfy</Text>
</Stack>
</Box>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiMagento} w={[12,32]} h={[12,32]} color={"#f46f25"} />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Magento</Text>
</Stack>
</Box>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiPrestashop} w={[12,32]} h={[12,32]} color={"#df0067"} />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Prestashop</Text>
</Stack>
</Box>

</SimpleGrid>
</ImageFadeIn>
</Box>

<Box py={["1rem", "2rem"]} w={"100%"} >
<Text as="h4"  pb={["1rem", "2rem"]} fontSize={["1rem", "1.75rem"]}>Headless CMS Integration</Text>
<ImageFadeIn>
<SimpleGrid columns={4} >
<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiContentful} w={[12,32]} h={[12,32]} color={"#3ab2e6"} />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Contentful</Text>
</Stack>
</Box>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiStoryblok} w={[12,32]} h={[12,32]} color={"#09b3af"} />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Storyblok</Text>
</Stack>
</Box>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiStrapi} w={[12,32]} h={[12,32]} color={"#2f2e8b"} />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Strapi</Text>
</Stack>
</Box>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack>
<Icon as={SiNetlify} w={[12,32]} h={[12,32]} color={"#25c7b7"} />
<Text as={'caption'} fontSize={["1rem", "1.25rem"]} >Netlify</Text>
</Stack>
</Box>

</SimpleGrid>
</ImageFadeIn>
</Box>

</SimpleGrid> 
</Box>
</Fragment>
)
}

