import React, { Fragment } from 'react';
import NextLink from 'next/link';
import { Box, Container, Flex, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'

export const Footer = () => {

return (
<Fragment>

<Flex className='footer' px={"4rem"} py={"1rem"} alignItems={'center'}  >
<Box m={"auto"}>
<HStack>
<NextLink href="/">
<Link><Image src="/logo-sign-sml.svg" alt="logo" w={"24px"} h={"24px"} /></Link>
</NextLink>
<Text fontSize={["1rem", "1.5rem"]}> © 2022 IMWD. All rights reserved</Text>
</HStack>
</Box>
</Flex>



</Fragment>
)

}
