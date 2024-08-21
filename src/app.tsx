import { Box, Grid, GridItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';

import HomeHeader from './components/home-header/home-header';
import { Wallet } from './contexts/wallet';
import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/home/home';
import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { useMemo } from 'react';
import { createDefaultAuthorizationResultCache, SolanaMobileWalletAdapter } from '@solana-mobile/wallet-adapter-mobile';
import { CoinbaseWalletAdapter, GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';

const Header = styled.div`
  position: absolute;
`

function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new SolanaMobileWalletAdapter({
        appIdentity: { name: 'Solana Wallet'},
        authorizationResultCache: createDefaultAuthorizationResultCache(),
      }),
      new CoinbaseWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
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
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;