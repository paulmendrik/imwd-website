import React from "react";
import { motion } from "framer-motion";
import { CloseIcon } from "components/icons/CloseIcon";
import { Circle} from '@chakra-ui/react';



export const Close = () => {

return (
<Circle size={'3rem'} bg={'black'}>
<motion.button
whileHover={{
    rotate: 180,
    transition: { ease: "easeOut", duration: 0.5 }
}}
whileTap={{
    rotate: 0
}}
transition= {{ type: 'spring'}}
>
<CloseIcon w={'1.5rem'} h={'1.5rem'}/>
</motion.button>
</Circle>
)
}