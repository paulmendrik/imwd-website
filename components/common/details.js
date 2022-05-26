import React, { Fragment, useRef } from 'react';
import { Box, Button, chakra, Flex, Input,SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';
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
<Box bg={"#C4F4D4"} py={"4rem"} px={"2rem"} >
<SimpleGrid  columns={[1,2]} spacing={20} >
<Flex
display={'block'}
alignContent={'center'}
alignItems={'center'}
minHeight={["162px", "480px"]}
backgroundImage="url('/contact.svg')"
backgroundRepeat={'no-repeat'}
backgroundPosition={'center'}
backgroundSize={'100%'} 
/>

<Box  p={"2rem"} >
<chakra.form className='form' w={"100%"} ref={form} onSubmit={sendEmail}>
<VStack spacing={12}>
<Box w={"100%"}>
<Text as={'h2'} fontSize={"5rem"}>Get in touch.</Text>
<Text as={'p'} fontSize={"2rem"} >
Let's build something great together.
Fill out the form for more information or to request a free quote.
Write to us to submit your idea or your project, we will reply as soon as possible.
</Text>
</Box>
<Input variant={'flushed'}  name='first_name' type={'text'} fontSize={"2rem"} placeholder={'First Name' + '*'} />
<Input variant={"flushed"}  name='last_name' type={'text'} fontSize={"2rem"} placeholder={'Last Name'+ '*'} />
<Input variant={"flushed"} name='email'  type={'email'} fontSize={"2rem"} placeholder={'Email' + '*'} />
<Input variant={"flushed"} name='phone'  type={'tel'} fontSize={"2rem"} placeholder={'Telephone'+'*'} />
<Input variant={"flushed"} name='company' type={'text'} fontSize={"2rem"} placeholder={'Company Name'} />
<Textarea variant={"outline"}  name='message' fontSize={"2rem"} placeholder={'Message' +'*'}></Textarea>
<Box w={"100%"}>
<Button p={"2rem"}  type={'submit'} fontSize={"2rem"}>Submit</Button> 
</Box>
</VStack>
</chakra.form>
</Box>
</SimpleGrid>
</Box>
</Fragment>
)
}