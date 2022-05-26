import React from "react";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";


const ChakraImage = chakra(motion.div)

export const ImageFadeIn = ({children}) => {
return (

<ChakraImage
initial={{ opacity: 0, y: "100px" }}
whileInView={{ opacity: 1, y: 0, transition: { type: "tween", delay: 1, duration: 1, ease: "easeInOut"}}}
>
{children}
</ChakraImage>



)
}