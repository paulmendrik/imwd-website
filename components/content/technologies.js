import React, {Fragment} from 'react';
import { ImageFadeIn } from "../framer/image-fade-in";
import { TextSlideTop } from "../framer/text-slide-top";
import { Box, Flex, Heading, SimpleGrid,Text } from '@chakra-ui/react';
import {
SiGatsby, 
SiReact,
SiTypescript,
SiSvelte,
SiShopify, 
SiMagento, 
SiPrestashop, 
SiSellfy } from 'react-icons'
import PortableText from 'react-portable-text';

export const Technologies = ({ props }) => {

return (
<Fragment>
<Box p={["1rem","4rem"]} mb={["2rem", "6rem"]}  bg="#F4F8FD">
<Heading as="h2" pb={"4rem"} fontSize={["2rem", "4rem"]}>{props.title}</Heading>
<SimpleGrid  columns={[1]}  spacing={[0,2]}>
<Box>
<TextSlideTop>
<Text as="p" fontSize={["1rem", "2rem"]}>
<PortableText content={props.content} />   
</Text>
</TextSlideTop>
</Box>

<Flex className='icons'  alignContent={"center"}  alignItems={'center'}>
<SimpleGrid m={"auto"} columns={1} >

<Box py={["1rem", "2rem"]} w={"100%"}>
<Text as="h4" pb={["1rem", "2rem"]} fontSize={["1rem", "1.75rem"]}>{props.frontend}</Text>
<ImageFadeIn>
<SimpleGrid  columns={4}  spacing={10} >
{props.frontendimage.map(( frontendimage, i) => (
<Box>
<Box 
width={["4rem", "10rem"]}
height={["4rem", "10rem"]}
backgroundImage={props.frontendimage[i]}
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'100%'}
/>
<Box py={'1rem'}>
<Text as={"caption"} w={["4rem", "10rem"]} fontSize={["0.0rem","1.5rem"]}>{props.frontendname[i]}</Text>
</Box>
</Box>
))}
</SimpleGrid>
</ImageFadeIn>
</Box>

<Box py={["1rem", "2rem"]} w={"100%"} >
<Text as="h4"  pb={["1rem", "2rem"]} fontSize={["1rem", "1.75rem"]}>{props.ecommerce}</Text>
<ImageFadeIn>
<SimpleGrid columns={4}  spacing={10} >
{props.ecommerceimage.map(( ecommerceimage, i) => (
<Box>
<Box 
width={["4rem", "10rem"]}
height={["4rem", "10rem"]}
backgroundImage={props.ecommerceimage[i]}
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'contain'}
/>
<Box py={'1rem'}>
<Text as={"caption"} w={["4rem", "10rem"]}  fontSize={["0rem","1.5rem"]}>{props.ecommercename[i]}</Text>
</Box>
</Box>
))}
</SimpleGrid>
</ImageFadeIn>
</Box>

<Box py={["1rem", "2rem"]} w={"100%"} >
<Text as="h4"  pb={["1rem", "2rem"]} fontSize={["1rem", "1.75rem"]}>{props.cms}</Text>
<ImageFadeIn>
<SimpleGrid columns={4} spacing={10} >
{props.cmsimage.map(( cmsimage, i) => (
<Box>
<Box
width={["4rem", "10rem"]}
height={["4rem", "10rem"]}
backgroundImage={props.cmsimage[i]}
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'100%'}
/>
<Box py={'1rem'}>
<Text as={"caption"} w={["4rem", "10rem"]}  fontSize={["0rem","1.5rem"]}>{props.cmsname[i]}</Text>
</Box>
</Box>
))}
</SimpleGrid>
</ImageFadeIn>
</Box>

</SimpleGrid>
</Flex>  
</SimpleGrid>
</Box>
</Fragment>
)
}

