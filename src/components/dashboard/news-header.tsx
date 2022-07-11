import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";

export default function NewsHeader() {
  return (
    <Box bg='gray.800' w={{ base: '100%' }} h={{ base: '200px' }} borderRadius={10}>
      <Wrap>
        <Flex h={{ base: '200px' }} p={4} alignItems={'center'} verticalAlign={'center'}>
          <WrapItem>
            <Box w='180px' h='180px' bg='gray.300' borderRadius={10}>
              <Image
                m={2} mx={'auto'} w='90%' h='70%'
                borderTopStartRadius={10}
                borderTopEndRadius={10}
                border='1px solid whitesmoke'
                objectFit='cover'
                src='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/10/25/16351831527188.jpg'
                alt='Dan Abramov'
              />
              <Text color={'red'} fontSize={10} align={'center'}> <strong>#201310 - LIGHT MONKEY</strong> </Text>
              <Text color={'red'} fontSize={10} align={'center'}> <strong>54  SOL</strong> </Text>
            </Box>
          </WrapItem>
        </Flex>
      </Wrap>
    </Box>
  );
}