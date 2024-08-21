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

const main = async() => {
  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  const wallet = Keypair.generate();

  const metaplex = Metaplex.make(connection)
      .use(keypairIdentity(wallet))
      .use(bundlrStorage());

  const owenerPublicKey = new PublicKey("3sEbhF2jnNs5RB2ohFunmCiywFgHZokLWwSxGGAsmWMd");
  const myNfts = await metaplex.nfts().findAllByOwner(owenerPublicKey).run()
  console.log(myNfts);
};

export default function Dashboard() {
  main()
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