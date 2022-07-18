
import { HamburgerIcon } from '@chakra-ui/icons';
import { HStack } from '@chakra-ui/react';

export default function LeftMenuButton() {
  return (
    <HStack ml={2} fontSize='10px'>
      <HamburgerIcon color='white' cursor={'pointer'} />
    </HStack>
  );
};