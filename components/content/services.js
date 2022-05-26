import React, {Fragment} from 'react';
import { urlFor } from 'lib/api';
import { ImageFadeIn } from "../framer/image-fade-in";
import { TextSlideTop } from "../framer/text-slide-top";
import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import PortableText from 'react-portable-text';


export const Services = ({ props }) => {

const bg = [ "#E6F7FF","#F5EFD8", "#E8F1D6", "#edbabf", "#C5D5CB" ] 

return (
<Fragment>
{props.map(( props, i) => (
<Box p={"2rem"}    mb={["3rem", "6rem"]}  bg={bg[i]} >
<SimpleGrid  columns={[1,2]}  spacing={10}>
<ImageFadeIn>
<Flex
display={'block'}
alignContent={'center'}
alignItems={'center'}
minHeight={["162px", "480px"]}
backgroundImage={urlFor(props.image).url()}
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'100%'} 
/>
</ImageFadeIn>
<Box display="flex" alignContent="center" alignItems="center">
<Stack>
<TextSlideTop> 
<Text as="h2" fontSize={["2rem", "4rem"]}>{props.title}</Text>
<Text as="p" fontSize={["1rem", "2rem"]}>
<PortableText content={props.content} />
</Text>
</TextSlideTop>
</Stack>
</Box>
</SimpleGrid>
</Box>
))}
</Fragment>
)
}

