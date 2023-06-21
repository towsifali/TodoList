import React from 'react'
import {Button, Flex, FormControl, FormErrorMessage, Heading, Input, useColorModeValue} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting}
    } = useForm();

    const navigate = useNavigate();
    const onSubmit = (values) =>{
        console.log(values)
    }
  return (
    <Flex height="100vh" align="center" justifyContent="center">
        <Flex direction="column" alignItems="Center" background={useColorModeValue('gray.100', "gray.700")} p={12} rounded={6}>
            <Heading mb={6}>Login</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email}>
                    <Input placeholder='Email' background={useColorModeValue('gray.300', "gray.600")}
                    type="email"
                    size="lg"
                    mt={6}
                    {...register("email", {required: "This is a required field"})}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                    <Input placeholder='Password' background={useColorModeValue('gray.300', "gray.600")}
                    type="password"
                    size="lg"
                    mt={6}
                    {...register("password", {required: "This is a required field"})}
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                </FormControl>
                <Button 
                isLoading ={isSubmitting}
                loadingText="Logging in..."
                type='submit' width="100%" colorScheme="green" variant="outline" mb={6} mt={6}>Login</Button>
                <Button onClick={() => navigate("/register", {replace : true})} width="100%" colorScheme="gray" variant="outline" mt={6}>Register</Button>
            </form>
        </Flex>
    </Flex>
  )
}