import './../../App.css';
import { findMasterEditionV2Pda, findNftsByMintListOperation, LazyMetadata, LazyNft, LoadNftInput, Metadata, Metaplex, Nft, TokenProgram, toMintAccount, toOriginalOrPrintEditionAccount } from "@metaplex-foundation/js";
import { clusterApiUrl, Commitment, Connection, PublicKey } from "@solana/web3.js";
import { useState } from "react";
import { Badge, Box, Container, Flex, Grid, HStack, Image, SimpleGrid, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const mx = Metaplex.make(connection);

function NftListTest() {
  const [address, setAddress] = useState(
    "8hTYASw98ZCZJwuEF9apPhmQTW7TYaoh9AnJfeV2X5tx"
  );
  const [nftMetadata, setMetadata] = useState<Metadata[] | null>(null);
  const [load, setLoad] = useState<Metadata[] | null>(null);
  const fetchNft = async () => {
    const nft = await mx.nfts().findAllByOwner(new PublicKey(address)).run()

    const metadata: Metadata[] = await Promise.all(nft.map(async (nftLazy) => {
      let lazyMetadata: any = {
        ...nftLazy,
        model: 'metadata',
        address: nftLazy.metadataAddress,
      };

      const data = await mx
        .nfts()
        .loadMetadata(lazyMetadata)
        .run();

      return data;

    }))

    console.log(metadata);

    setMetadata(metadata);

  };

  return (
    <div>
      <Box p='10px'>
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <button onClick={fetchNft}>Fetch</button>
      </Box>


      <Flex
        direction="column"
        justifyContent="center"
      >
        <Grid
          w="full"
          gridGap="5"
          gridTemplateColumns="repeat( auto-fit, minmax(250px, 1fr) )">

          {nftMetadata?.map((nft) => (
            <Stack border='1px solid white' className="img-container">

                  <Image
                    objectFit={'contain'}
                    width='100%'
                    height='100%'
                    src={nft.json?.image}
                    alt="The downloaded illustration of the provided NFT address."
                  />
                  <Text color={'white'} fontSize={12} align={'center'}> <strong>{nft.name}</strong> </Text>
            </Stack>
          ))}
        </Grid>
      </Flex>
    </div>
  );
}

export default NftListTest;
