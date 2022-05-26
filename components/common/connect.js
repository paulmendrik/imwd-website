import React, { Fragment } from 'react';
import { ImageFadeIn, TextSlideTop } from 'components/framer';
import { Hello } from './hello';
import { 
Box,
Flex,
List,
ListItem,
SimpleGrid,
Text,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';



export const Connect = () => {


return (

<Fragment>


<Box p={"2rem"}  bg={"#E4FCEC"}    mb={["3rem", "6rem"]}>
<SimpleGrid  columns={[1,2]}  spacing={10}>
<ImageFadeIn>
<Flex
display={'block'}
alignContent={'center'}
alignItems={'center'}
minHeight={["162px", "480px"]}
backgroundImage="url('/connect.svg')"
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'100%'} 
/>
</ImageFadeIn>
<Box 
className='hello'
display="flex" 
alignContent="center" 
alignItems="center"
backgroundImage="url('/logo-sign.svg')"
backgroundRepeat={'no-repeat'}
backgroundPosition="center"
>
<List w={"100%"}>

<ListItem>
<Text as="p" fontSize={["1rem", "3rem"]}>Need help with a project?</Text>
</ListItem>

<ListItem>
<Text as="h2" fontSize={["2rem", "6rem"]}>Let's talk!</Text>
</ListItem>

<ListItem>
<Hello/>
</ListItem>

</List>



 
</Box>
</SimpleGrid>
</Box>
</Fragment>
)
}