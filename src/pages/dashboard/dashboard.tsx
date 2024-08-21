import { Box, Flex } from "@chakra-ui/react";


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State, dashboardActions } from '../../contexts/redux';

import LeftSideMenu from "../../components/dashboard/left-side-menu/left-side-menu";
import NewsHeader from "../../components/dashboard/news-header";
import { SendOneLamportToRandomAddress } from "../../contexts/send";
import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import NftListTest from "../../components/dashboard/nftlisttest";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Dashboard() {
  
  const publicKey = useWallet().publicKey;
  
  const dispatch = useDispatch();
  const { setLeftMenuState } = bindActionCreators(dashboardActions, dispatch);
  const dashboardState = useSelector((state: State) => state.dashboard);

  if (!dashboardState.leftMenuShow) {
    setLeftMenuState(
      {
        ...dashboardState,
        leftMenuShow: true
      }
    );
  }

  const leftBarW = '15%'
  return (
    <div className="Dashboard"
      style={{
        height: '90%',
        marginTop: '92px'
      }}
    >

      <Flex h={'100%'}>
        <Box w={{ base: leftBarW }} h={{ base: '100%' }}>
          <LeftSideMenu />
        </Box>

        <Flex w={{ base: '100%' }} h={{ base: '100%' }} ml={8} style={{ display: 'table-row-group' }}>
          <Box w={{ base: '98%' }} h={{ base: '25%' }} >
            {/* <Box w={{ base: '98%' }} h={{ base: '100%' }} bg='gray.600' borderRadius={10} /> */}
            <NewsHeader />
          </Box>
          <Box w={{ base: '100%' }} h={{ base: '75%' }}  >
            <Box w={{ base: '98%' }} h={{ base: '100%' }} bg='#27293d;' borderRadius={10} hidden={!publicKey}>
              <NftListTest/>
                <SendOneLamportToRandomAddress />
            </Box>
          </Box>
        </Flex>

      </Flex>

    </div>
  );
}