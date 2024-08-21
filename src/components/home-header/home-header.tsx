
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Wallet } from '../../contexts/wallet';
import { BrowserRouter, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, globalActions, dashboardActions } from '../../contexts/redux';
import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';

const Links = ['Dashboard', 'Projects', 'Team'];

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px 10px;
  &:hover {
    textDecoration: none;
    background: linear-gradient(0deg,#ba54f5,#e14eca);;
    fontSize: 20;
    border-radius: 10px;
  }
`;
const NavLink = ({ children }: { children: ReactNode[] }) => (

  <StyledLink to={`${children[1]}`}>{children[0]}</StyledLink>
  // <Link
  //   px={5}
  //   py={3}
  //   rounded={'md'}
  //   _hover={{
  //     textDecoration: 'none',
  //     bg: 'gray.600',
  //     fontSize: 20
  //   }}
  //   href={`${children[1]}`}>
  //   {children[0]}
  // </Link>
);


export default function HomeHeader() {
  const dispatch = useDispatch();
  const { setLeftMenuState } = bindActionCreators(dashboardActions, dispatch);
  const dashboardState = useSelector((state: State) => state.dashboard);


  console.log('newChange: ', dashboardState);
  let openMenu = (e: any) => {
    setLeftMenuState({ leftMenuOpen: !dashboardState.leftMenuOpen, leftMenuCompress: false })
  };

  const showMenu = (e: any) => {
    <HStack ml={2} fontSize='10px'>
      <HamburgerIcon color='white' cursor={'pointer'} />
    </HStack>
  };

  
  return (
    <>
      <Flex justifyContent={'space-between'} position={'absolute'}>
        <Box bg='' px={4} w={'100vw'} mx={'auto'} h={{ base: '62px' }}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack ml={2} fontSize='2rem'>
              <HamburgerIcon color='white' cursor={'pointer'} />
            </HStack>
            {/* {showMenu} */}
            <HStack spacing={8} alignItems={'center'}>
              <NavLink key={'home'}>{['Home', '/']}</NavLink>
              <div onClick={openMenu}><NavLink key={'dashboard'}>{['Dashboard', 'dashboard']}</NavLink></div>
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