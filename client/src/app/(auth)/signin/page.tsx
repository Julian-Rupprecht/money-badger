import { Avatar, Box, Container, Paper, Stack, Typography } from "@mui/material";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
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
          borderRadius: 3,
          borderColor: "#180439",
          backgroundColor: "#e2e4df",
          boxShadow: 10
        }}
      >
        <Container maxWidth="xs" sx={{ p: 3 }}>    
          <Stack alignItems="center" gap={1} mb={4}>
            <Avatar src="images/mb-logo.png" sx={{ width: 60, height: 60 }} />
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography variant="h5" color="#180439">
                Sign Into Account
              </Typography>
            </Box>
          </Stack>
          <SignInForm />
        </Container>
        </Paper>   
    </Box>
  );
}