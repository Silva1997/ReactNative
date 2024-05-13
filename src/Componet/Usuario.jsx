import React from "react";
import { Stack, FormControl, Box, Input } from 'native-base'
import { Button } from "native-base";

 const Example = () => {
    return (

        <Box w="100%" >
            <FormControl isRequired>
                <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
                    base: "100%",
                    md: "25%"
                }}>

                    <Input
                        size="md"
                        id='nome2'
                        _light={{
                            bg: "coolGray.100",

                        }}

                        _ shadow={2} type="text" defaultValue="Ana" placeholder="Nome"

                    />
                    <Input
                        size="md"
                        id='senha'
                        _light={{
                            bg: "coolGray.100",

                        }}

                        _ shadow={2} type="password" defaultValue="12345" placeholder="password"

                    />
                    <Button size="md" variant="subtle"
                        backgroundColor={'error.200'} >
                        Cadrastar</Button>
                </Stack>
            </FormControl>
        </Box>)
};
export default Example;