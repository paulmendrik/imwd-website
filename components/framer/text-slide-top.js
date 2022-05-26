import React from "react";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";

const ChakraBox = chakra(motion.div)

export const TextSlideTop = ({children}) => {
return (

<ChakraBox
initial={{ y: "100px", opacity: 0 }}
whileInView={{ y: 0, opacity: 1, transition: { type: "tween", delay: 2, duration: 2, ease: "easeInOut" }}}
>
{children}
</ChakraBox>



)
}