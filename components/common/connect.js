import React, { Fragment } from 'react';
import { ImageFadeIn, TextSlideTop } from 'components/framer';
import { Hello } from './hello';
import { 
Box,
Flex,
Image,
SimpleGrid,
Stack,
Text,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';



export const Connect = () => {


return (

<Fragment>


<Box  p={["1rem","3rem"]} height={"auto"}  bg={"#E4FCEC"} >
<SimpleGrid  columns={[1,2]}  spacing={[4,6]}>
<ImageFadeIn>
<Flex
justifyContent={"center"}
height={"100%"}
backgroundSize={'contain'} 
>
<Image src={'/connect.svg'} />
</Flex>
</ImageFadeIn>
<Stack className='hello' width={"full"} >
<Text>Need help with a project?</Text>
<Text as="h2">Let's talk!</Text>
<Hello/>
</Stack>
</SimpleGrid>
</Box>
</Fragment>
)
}