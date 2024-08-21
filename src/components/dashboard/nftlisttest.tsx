import { findMasterEditionV2Pda, findNftsByMintListOperation, LazyMetadata, LazyNft, LoadNftInput, Metadata, Metaplex, Nft, TokenProgram, toMintAccount, toOriginalOrPrintEditionAccount } from "@metaplex-foundation/js";
import { clusterApiUrl, Commitment, Connection, PublicKey } from "@solana/web3.js";
import { useState } from "react";
import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const mx = Metaplex.make(connection);

function NftListTest() {
  const [address, setAddress] = useState(
    "3sEbhF2jnNs5RB2ohFunmCiywFgHZokLWwSxGGAsmWMd"
  );
  const [nft, setNft] = useState<Metadata | null>(null);
  const fetchNft = async () => {
    const nft = await mx.nfts().findAllByOwner(new PublicKey(address)).run()

    const metadata: (Metadata | null)[] = await Promise.all(nft.map(async (nftLazy) => {
      try {
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

      } catch (e) {
        return null;
      }

    }))

    console.log(metadata);

    setNft(metadata[1]);

  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">NFT Mint Address</h1>
        <div className="nftForm">
          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <button onClick={fetchNft}>Fetch</button>
        </div>
        {nft && (
          <div className="nftPreview">
            <h1>{nft.name}</h1>
            <Box w='250px' bg='#27293d' borderRadius={10}>
              <Image
                m={2} mx={'auto'} w='90%' h='70%'
                borderTopStartRadius={10}
                borderTopEndRadius={10}
                border='1px solid whitesmoke'
                objectFit='cover'
              src={nft.json?.image}
              alt="The downloaded illustration of the provided NFT address."
            />
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}

export default NftListTest;
