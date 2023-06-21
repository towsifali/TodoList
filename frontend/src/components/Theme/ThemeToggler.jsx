import React from 'react'
import {Switch, useColorMode, FormLabel} from "@chakra-ui/react"
import { Form } from 'react-hook-form'

export const ThemeToggler = ({showLabel= false, ...rest}) => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <div>
        {showLabel && (
            <FormLabel htmlFor='theme-toggler' mb={0}>
                Enable Dark Theme
            </FormLabel>
        )}
        <Switch id="theme-toggler" size="sm" isChecked={colorMode == "dark"}
        isDisabled={false} value = {colorMode} colorScheme="green" mr={2}
        onChange={toggleColorMode} {...rest}/>
    </div>
  )
}
