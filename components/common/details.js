import React, { Fragment, useRef } from 'react';
import { Box, Button, chakra, Flex, Image, Input,SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';


export const Details = () => {

const form = useRef();

const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm('service_g1773sf', 'template_kknj1eu', form.current, 'JdypUsD4a7Pti71e-')
.then((result) => {
console.log(result.text);
}, (error) => {
console.log(error.text);
});
};

return (
<Fragment>
<Box bg={"#C4F4D4"} p={["1rem","3rem"]} height={"auto"}  >
<SimpleGrid  columns={[1,2]} spacing={[2,6]} >
<Flex py={["2", "0"]} justifyContent={"center"} backgroundSize={'contain'}>
<Image src={'/contact.svg'} />
</Flex>
<Box display={'flex'} alignContent="center" alignItems="center" >
<chakra.form className='form' w={"100%"} ref={form} onSubmit={sendEmail}>
<VStack spacing={4}>
<Box w={"100%"}>
<Text as={'h2'} fontSize={["4rem", "6rem"]}>Get in touch.</Text>
<Text as={'p'} fontSize={["2rem", "3rem"]} >
Let's build something great together.
Fill out the form for more information or to request a free quote.
Write to us to submit your idea or your project, we will reply as soon as possible.
</Text>
</Box>
<Input variant={'flushed'}  name='first_name' type={'text'}  placeholder={'First Name' + '*'} fontSize={["1rem", "2rem"]} />
<Input variant={"flushed"}  name='last_name' type={'text'} placeholder={'Last Name'+ '*'} fontSize={["1rem", "2rem"]} />
<Input variant={"flushed"} name='email'  type={'email'} placeholder={'Email' + '*'} fontSize={["1rem", "2rem"]} />
<Input variant={"flushed"} name='phone'  type={'tel'} placeholder={'Telephone'+'*'} fontSize={["1rem", "2rem"]} />
<Input variant={"flushed"} name='company' type={'text'} placeholder={'Company Name'} fontSize={["1rem", "2rem"]} />
<Textarea variant={"outline"}  name='message' placeholder={'Message' +'*'} fontSize={["1rem", "2rem"]} />


<Box w={"100%"}>
<Button p={"1rem"} fontSize={"1.25rem"} fontWeight={"bold"} type={'submit'}>Submit</Button> 
</Box>
</VStack>
</chakra.form>
</Box>
</SimpleGrid>
</Box>
</Fragment>
)
}