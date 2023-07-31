import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const TweetOptions = () => (
  <Box
    sx={{
      // width: 300,
      height: 300,
    }}
    role="presentation"
  >
    {/* <div style={{}}>
      <h1 style={{ fontFamily: "Bold", fontSize: 20 }}>
        Use this QR Code for Lipa fare{" "}
      </h1>
      <p style={{ fontFamily: "Regular", fontSize: 15 }}>
        A transaction will be carried out to your wallet and an SMS alert will
        be sent to you upon successful payment
      </p>
    </div> */}
    <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>Icon</ListItemIcon>
          <ListItemText />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);
