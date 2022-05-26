import React, { Fragment, useRef } from 'react';
import { motion, isValidMotionProp } from "framer-motion";
import { Close } from './close';
import { Details } from './details';
import { 
Box,
Button,
Center,
chakra,
Drawer,
DrawerBody,
DrawerOverlay,
DrawerContent,
Link,
useDisclosure
} from '@chakra-ui/react';

const ChakraBox = chakra(motion.div, {
shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
})

export const Hello = () => {

const { isOpen, onOpen, onClose } = useDisclosure();
const btnRef = useRef();

return (

<Fragment>
<Button className='hello' ref={btnRef} fontSize={["1rem", "2.25rem"]}  onClick={onOpen} >Contact Us</Button>
<Drawer isOpen={isOpen} placement='right' size={'full'} onClose={onClose} finalFocusRef={btnRef}>
<DrawerOverlay />
<DrawerContent bg={"#C4F4D4"} >
<Box 
pos={'absolute'} 
top={"2rem"} 
right={"2rem"} 
onClick={onClose}
>
<Close/> 
</Box>
<DrawerBody>
<Center>
<ChakraBox
initial={{ opacity: 0, scale: 0 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ ease: "circIn", delay: 1, duration: 1 }}
display={'flex'}
justifyContent={'center'}
alignItems={'center'}
w={"100vw"}
h={"100vh"}
>
<Details/>
</ChakraBox>
</Center>
</DrawerBody> 
</DrawerContent>
</Drawer>
</Fragment>
)
}