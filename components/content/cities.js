import React, {Fragment} from 'react';
import { urlFor } from 'lib/api';
import { ImageFadeIn } from 'components/framer';
import { Box, Flex, SimpleGrid, Text, } from '@chakra-ui/react';

export const Cities = ({ props }) => {
return (
<Fragment>
<Box p={'2rem'} mt={'3rem'}>
<Text as="h2" fontSize={["2rem", "4rem"]}>
We Work with clients everywhere.
</Text>
<ImageFadeIn>
<Flex className='cities' py={'2rem'}  alignItems="center" justifyContent="center">
<SimpleGrid   columns={[2,10]} >
{props.map((prop, i) => (
<Box width={'15rem'} height={'15rem'}>
<Box 
margin={'auto'}
width={'10rem'}
height={'10rem'}
textAlign={'center'}
backgroundImage={urlFor(prop.city).url()}
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'100%'}
/>
<Box py={'1rem'}>
<Text fontWeight={'extrabold'} fontSize={["1rem","1.25rem"]}>{prop.title}</Text>
</Box>
</Box>
))}
</SimpleGrid>
</Flex>
</ImageFadeIn>
</Box>
</Fragment>
)
}