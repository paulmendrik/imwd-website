import React, { Fragment } from 'react';
import NextLink from 'next/link';
import { Contact } from './contact';
import { Box,Flex, Image, Link,Spacer } from '@chakra-ui/react';


export const Header = () => {

return (
<Fragment>
<Flex className='header'  p={["1rem","3rem"]} alignItems={'center'}  >
<Box>
<NextLink href="/">
<Link><Image src="/logo.svg" alt="logo"/></Link>
</NextLink>  
</Box>
<Spacer/>
<Box>
<Contact/>
</Box>
</Flex>
</Fragment>
)
}

