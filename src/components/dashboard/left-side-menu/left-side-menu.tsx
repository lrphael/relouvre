import { Box, List, ListItem } from "@chakra-ui/react";
import MenuButton from "./menu-button";

export default function LeftSideMenu() {
  const menuOptions = ['Today News', 'Trending', 'Marketplaces', 'Mint', 'Dashboard', 'BeWhale', '...']
  const listElements = menuOptions.map((text: string) =>
    <ListItem>
      <MenuButton name={text} />
    </ListItem>
  );
  return (
    <Box h={{ base: '100%' }} bg='gray.800' borderRadius={10} pt={5}>
      <List spacing={3}>
        {listElements}
      </List>
    </Box >
  );
}