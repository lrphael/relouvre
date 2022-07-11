import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, GridItem, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";


// import logo from './images/wp10424924-nfts-wallpapers.png';
import logo from './images/wp10425051-nfts-wallpapers.jpg';


const TitleBox = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  width: 300px;
  text-align: left;
  `

const ProductsBox = styled.div`
  position: absolute;
  right: 5%;
  width: 300px;
  text-align: left;
`

export default function Home() {
  return (
    <div className="Home"
      style={{
        background: `linear-gradient(to right, #2d37484d, #2d37484d),  url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <Flex>
        <Grid
          templateRows='repeat(3, 1fr)'
          templateColumns='repeat(1, 1fr)'
          gap={4}
          h='95vh'
          w='100vw'
        >
          <GridItem rowSpan={2} >
            <TitleBox>
              <Heading mb={2}>Django Chain</Heading>
              <Text fontSize='xl'>
                Unchained Django is now chained by the blockchain and will do anything to help you change your finances to unchained!
              </Text>
            </TitleBox>
          </GridItem>
          <GridItem >
            <ProductsBox>
              <List spacing={1}>
                <ListItem>
                  <ChevronRightIcon color='yellow.400' />
                  Quidem, ipsam illum quis sed
                </ListItem>
                <ListItem>
                  <ChevronRightIcon color='yellow.400' />
                  Quidem, ipsam illum quis sed
                </ListItem>
                <ListItem>
                  <ChevronRightIcon color='yellow.400' />
                  Quidem, ipsam illum quis sed
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ChevronRightIcon color='yellow.400' />
                  Quidem, ipsam illum quis sed
                </ListItem>
              </List>
            </ProductsBox>
          </GridItem>
        </Grid>
      </Flex>
    </div >
  );
}
