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
    <Box h={{ base: '100%' }} 
    bg='linear-gradient(0deg,#ba54f5,#e14eca)' 
    borderRadius={10} 
    pt={5}
    _before={{
      content: `''`,
      position: 'absolute',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '10px solid #e14eca',
      top: '82px',
      left: '40px',
      transform: 'translate(-50%)'
    }}
    >
      <List spacing={3}>
        {listElements}
      </List>
    </Box >
  );
}