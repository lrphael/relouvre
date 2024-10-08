
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, dashboardActions } from '../../contexts/redux';

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, dashboardActions } from '../../contexts/redux';

import {
  Box,
  Flex,
  HStack
  HStack
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import LeftMenuButton from './left-menu-button'; 


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
);


export default function HomeHeader() {
  const dispatch = useDispatch();
  const { setLeftMenuState } = bindActionCreators(dashboardActions, dispatch);
  const dashboardState = useSelector((state: State) => state.dashboard);

  let activeMenu = (e: any) => {
    setLeftMenuState(
      {
        ...dashboardState,
        leftMenuShow: true
      }
    )
  };
  let desactiveMenu = (e: any) => {
    setLeftMenuState(
      {
        ...dashboardState,
        leftMenuShow: false
      }
    )
  };

  let showMenu = dashboardState.leftMenuShow ? <LeftMenuButton /> : <div></div>;

  return (
    <>
      <Flex justifyContent={'space-between'} position={'absolute'}>
        <Box bg='' px={4} w={'100vw'} mx={'auto'} h={{ base: '62px' }}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            {showMenu}
            <HStack spacing={8} alignItems={'center'}>
              <div onClick={desactiveMenu}><NavLink key={'home'}>{['Home', '/']}</NavLink></div>
              <div onClick={activeMenu}><NavLink key={'dashboard'}>{['Dashboard', 'dashboard']}</NavLink></div>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </>
  );
};