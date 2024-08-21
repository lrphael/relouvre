
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Link,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Wallet } from '../../contexts/wallet';
// import { Link } from 'react-router-dom';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode[] }) => (
  <Link
    px={5}
    py={3}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.600',
      fontSize: 20
    }}
    href={`${children[1]}`}>
    {children[0]}
  </Link>
);


export default function HomeHeader() {

  return (
    <>
      <Flex justifyContent={'space-between'} position={'absolute'}>
        <Box bg='' px={4} w={'100vw'} mx={'auto'} h={{ base: '62px' }}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack ml={2} fontSize='2rem'>
              <HamburgerIcon color='white' cursor={'pointer'} />
            </HStack>
            <HStack spacing={8} alignItems={'center'}>
              <NavLink key={'home'}>{['Home', '/']}</NavLink>
              <NavLink key={'dashboard'}>{['Dashboard', 'dashboard']}</NavLink>
            </HStack>
            <HStack spacing={2} alignItems={'right-side'}>
              <Wallet />
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </>
  );
};