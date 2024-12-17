import { Avatar, Box, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

export default function signUp() {
  return (
    <Box
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Paper 
        elevation={15} 
        sx={{ 
          p: 3,
          borderRadius: 4 
        }}
      >
        <Container maxWidth="xs" sx={{ p: 3 }}>    
          <Stack alignItems="center" gap={1} mb={4}>
            <Avatar src="images/mb-logo.jpeg" sx={{ width: 60, height: 60 }} />
            <Box display="flex" flexDirection="row" alignItems="center">
              <Divider orientation="horizontal"/>
              <Typography variant="h5">
                Sign Into Account
              </Typography>
              <Divider orientation="horizontal"/>
            </Box>
          </Stack>
          <LoginForm />
        </Container>
        </Paper>   
    </Box>
  );
}