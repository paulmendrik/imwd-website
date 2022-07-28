import React, { Fragment } from 'react';
import { ImageFadeIn } from 'components/framer';
import { Hello } from './hello';
import {
AspectRatio, 
Box,
Flex,
Image,
SimpleGrid,
Stack,
Text,
} from '@chakra-ui/react';


export const Connect = () => {

return (

<Fragment>

<Box  p={["1rem","3rem"]} height={"auto"}  bg={"#E4FCEC"} >
<ImageFadeIn>
<SimpleGrid  columns={[1,2]}  spacing={[4,6]}>
<Flex
justifyContent={"center"}
height={"100%"}
backgroundSize={'contain'} 
>
<AspectRatio width={'full'}  ratio={16/9}>
<Image width={'100%'} src={'/connect.svg'} />
</AspectRatio>
</Flex>

<Box display={"flex"}  alignItems={"center"} alignContent={"center"}>
<Stack className='hello' width={"full"} >
<Text>Need help with a project?</Text>
<Text as="h2">Let's talk!</Text>
<Hello/>
</Stack>
</Box>
</SimpleGrid>
</ImageFadeIn>
</Box>
</Fragment>
)
}