import { Grid, GridItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';

import HomeHeader from './components/home-header/home-header';
import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/home/home';

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
