import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";

type buttonType = {
  name: string
}

export default function MenuButton(props: buttonType) {
  return (
    <Box w={{ base: '100%' }} display='flex' alignContent={'center'} justifyContent={'center'} my={2} role="group">
      <Button bg='gray.800' textAlign='left' w={{ base: '90%' }}
        _hover={{
          background: 'gray.700',
        }} >
        <ChevronRightIcon color='yellow.400' />
        <Text textAlign='left'
          w={{ base: '100%' }}
          color='gray'
          _groupHover={{
            color: 'whitesmoke'
          }} >
          {props.name}
        </Text>
      </Button>
    </Box >
  );
}