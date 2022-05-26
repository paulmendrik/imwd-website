import React, {Fragment} from 'react';
import { ImageFadeIn } from "../framer/image-fade-in";
import { TextSlideTop } from "../framer/text-slide-top";
import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import PortableText from 'react-portable-text';

export const Technologies = ({ props }) => {

return (
<Fragment>
<Box  bg="#F4F8FD">
<SimpleGrid p={"2rem"} columns={[1,2]} >
<Box>
<Stack>
<TextSlideTop>
<Text as="h2" py={["1rem", "4rem"]} fontSize={["2rem", "4rem"]}>{props.title}</Text>
<Text as="p" fontSize={["1rem", "2rem"]}>
<PortableText content={props.content} />   
</Text>
</TextSlideTop>
</Stack>
</Box>

<Flex className='icons' p={["1rem","4rem"]}  alignContent={'flex-start'} alignItems={'center'}>
<SimpleGrid columns={1} >

<Box px={["0", "2rem"]} py={["1rem", "2rem"]} w={"100%"} >
<Text as="h4" pb={["1rem", "2rem"]} fontSize={["1rem", "1.75rem"]}>{props.frontend}</Text>
<ImageFadeIn>
<SimpleGrid margin={'auto'}  columns={4}  spacing={20} >
{props.frontendimage.map(( frontendimage, i) => (
<Box>
<Box 
width={["4rem", "8rem"]}
height={["4rem", "8rem"]}
backgroundImage={props.frontendimage[i]}
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'contain'}
/>
<Box py={'1rem'}>
<Text as={"caption"} fontSize={["0.125rem","1.5rem"]}>{props.frontendname[i]}</Text>
</Box>
</Box>
))}
</SimpleGrid>
</ImageFadeIn>
</Box>

<Box px={["0", "2rem"]} py={["1rem", "2rem"]} w={"100%"} >
<Text as="h4"  pb={["1rem", "2rem"]} fontSize={["1rem", "1.75rem"]}>{props.ecommerce}</Text>
<ImageFadeIn>
<SimpleGrid columns={4}  spacing={20} >
{props.ecommerceimage.map(( ecommerceimage, i) => (
<Box>
<Box 
width={["4rem", "8rem"]}
height={["4rem", "8rem"]}
backgroundImage={props.ecommerceimage[i]}
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'contain'}
/>
<Box py={'1rem'}>
<Text as={"caption"}  fontSize={["0.5rem","1.5rem"]}>{props.ecommercename[i]}</Text>
</Box>
</Box>
))}
</SimpleGrid>
</ImageFadeIn>
</Box>

<Box px={["0", "2rem"]} py={["1rem", "2rem"]} w={"100%"} >
<Text as="h4"  pb={["1rem", "2rem"]} fontSize={["1rem", "1.75rem"]}>{props.cms}</Text>
<ImageFadeIn>
<SimpleGrid columns={4} spacing={20} >
{props.cmsimage.map(( cmsimage, i) => (
<Box>
<Box
width={["4rem", "8rem"]}
height={["4rem", "8rem"]}
backgroundImage={props.cmsimage[i]}
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'100%'}
/>
<Box py={'1rem'}>
<Text as={"caption"}  fontSize={["0.5rem","1.5rem"]}>{props.cmsname[i]}</Text>
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

