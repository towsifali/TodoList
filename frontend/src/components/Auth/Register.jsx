import React from 'react'
import {Button, Flex, FormControl, FormErrorMessage, Heading, Input, useColorModeValue} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ThemeToggler } from '../Theme/ThemeToggler'

export const Register = () => {
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
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        alignItems="center"
        background={useColorModeValue("gray.100", "gray.700")}
        p={12}
        rounded={6}
      >
        <Heading mb={6}>Register</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.email}>
            <Input
              placeholder="Email"
              background={useColorModeValue("gray.300", "gray.600")}
              type="email"
              size="lg"
              mt={6}
              {...register("email", {
                required: "This is required field",
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.username}>
            <Input
              placeholder="username"
              background={useColorModeValue("gray.300", "gray.600")}
              type="username"
              size="lg"
              mt={6}
              {...register("username", {
                required: "This is required field",
                minLength: {
                    value: 5,
                    message: "Username must be at least 5 characters",
                },
                maxLength: {
                    value: 24,
                    message: "Username must be at most 24 characters",
                }
              })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <Input
              placeholder="Password"
              background={useColorModeValue("gray.300", "gray.600")}
              type="password"
              size="lg"
              mt={6}
              {...register("password", {
                required: "This is required field",
                minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters",
                },
                maxLength: {
                    value: 24,
                    message: "Password must be at most 24 characters",
                },
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            isLoading={isSubmitting}
            loadingText="Logging in..."
            width="100%"
            colorScheme="green"
            variant="outline"
            mt={6}
            mb={6}
            type="submit"
          >
            Register
          </Button>
        </form>
        <ThemeToggler showLabel={true} />
        <Button
          onClick={() => navigate("/login", { replace: true })}
          width="100%"
          colorScheme="gray"
          variant="outline"
          mt={6}
        >
          Login Instead
        </Button>
      </Flex>
    </Flex>
  );
};