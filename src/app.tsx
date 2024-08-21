import { Box, Grid, GridItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';

import HomeHeader from './components/home-header/home-header';
import { Wallet } from './contexts/wallet';
import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/home/home';
import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";

const Header = styled.div`
  position: absolute;
`

function App() {
  return (
    <div className="App">
      <Grid
        gridTemplateRows={'3, 1fr'}
        gridTemplateColumns={'1 1fr'}
      >
        <GridItem>
          <HomeHeader />
        </GridItem>
        <GridItem h={'100vh'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;