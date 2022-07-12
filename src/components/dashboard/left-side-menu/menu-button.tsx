import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";

type buttonType = {
  name: string
}

export default function MenuButton(props: buttonType) {
  return (
    <Box w={{ base: '100%' }} display='flex' alignContent={'center'} justifyContent={'center'} my={2} role="group">
      <Button bg=' ' textAlign='left' w={{ base: '90%' }}
        _hover={{
          background: '',
        }} >
        <ChevronRightIcon color='yellow.400' />
        <Text textAlign='left'
          w={{ base: '100%' }}
          color='white'
          _groupHover={{
            color: 'black',
            fontWeight: 'bold'
          }} >
          {props.name}
        </Text>
      </Button>
    </Box >
  );
}