import React, {Fragment} from 'react';
import { urlFor } from 'lib/api';
import { ImageFadeIn } from "../framer/image-fade-in";
import { TextSlideTop } from "../framer/text-slide-top";
import { AspectRatio, Box, Flex, Heading, Image, SimpleGrid,Text } from '@chakra-ui/react';
import PortableText from 'react-portable-text';


export const Services = ({ props }) => {

const bg = [ "#E6F7FF","#F5EFD8", "#E8F1D6", "#edbabf", "#C5D5CB" ] 

return (
<Fragment>
{props.map(( props, i) => (
<Box p={["1rem","3rem"]} mb={["1rem", "2rem"]}  bg={bg[i]} height={"auto"} >
<SimpleGrid  columns={[1,2]}  spacing={[4,6]}>
<ImageFadeIn>
<Flex
justifyContent={"center"}
height={'100%'}
backgroundSize={'contain'} 
>
<AspectRatio width={'full'}  ratio={16 / 9}>
<Image src={urlFor(props.image).url()} />
</AspectRatio>
</Flex>
</ImageFadeIn>
<Box display="flex" alignContent="center" alignItems="center">
<TextSlideTop> 
<Heading as="h2"  mb={"0.25rem"} >{props.title}</Heading>
<Text as="p">
<PortableText content={props.content} />
</Text>
</TextSlideTop>
</Box>
</SimpleGrid>
</Box>
))}
</Fragment>
)
}

