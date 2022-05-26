import React from "react";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";

const ChakraBox = chakra(motion.div)

export const SlideInRight = ({children}) => {
return (

<ChakraBox
initial={{ x: "1000px", opacity: 0 }}
whileInView={{ x:0, opacity: 1, transition: { type: "tween", delay: 1, duration: 1, ease: "easeInOut"}}}
>
{children}
</ChakraBox>



)
}