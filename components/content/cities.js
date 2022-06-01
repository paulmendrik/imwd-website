import React, {Fragment} from 'react';
import { urlFor } from 'lib/api';
import { ImageFadeIn } from 'components/framer';
import { Box, Flex, Heading, SimpleGrid, Text, } from '@chakra-ui/react';

export const Cities = ({ props }) => {
return (
<Fragment>
<Box  mb={["2rem", "6rem"]} p={["1rem","3rem"]} bg="#F4F8FD" height={"auto"}>
<Heading as="h2" pb={"4rem"} fontSize={["2rem", "4rem"]}>
We Work with clients everywhere.
</Heading>
<ImageFadeIn>
<Box display={"flex"} alignContent={"center"} justifyContent="center" alignItems={"center"} w={"full"}>
<SimpleGrid className='cities'   columns={[2,5]} spacing={[4,8]} >
{props.map((prop, i) => (
<Box>
<Box 
 w={[24,32]} 
 h={[24,32]}
textAlign={'center'}
backgroundImage={urlFor(prop.city).url()}
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'100%'}
/>
<Box py={'1rem'}>
<Text as={"caption"}  w={[24,32]}   fontWeight={'extrabold'} fontSize={["0.75rem","1rem"]}>{prop.title}</Text>
</Box>
</Box>
))}
</SimpleGrid>
</Box>
</ImageFadeIn>
</Box>
</Fragment>
)
}