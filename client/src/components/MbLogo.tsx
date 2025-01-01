import { Avatar, Box, Divider, Typography } from "@mui/material";

export default function MbLogo() {
  return (
    <Box 
      display="flex" 
      flexDirection="row" 
      alignItems="center"
      gap={1}
    >
      <Avatar 
        alt="MB"
        src="images/mb-logo.png"
        sx={{ 
          width: 60, 
          height: 60
        }} 
      />  
      <Divider 
        orientation="vertical" 
        sx={{ 
          backgroundColor: "#180439",
          height: "60px"
        }} 
      />
      <Typography variant="h5" fontFamily="Yrsa Semi-Bold" color="#180439">Money Badger</Typography>
    </Box>
  );
}