"use client";

import { Avatar, Box, Container, Paper, Stack, Typography } from "@mui/material";
import SignUpForm from "../components/SignUpForm";
import VerifyEmailPopUp from "../components/VerifyEmailPopUp";
import { useState } from "react";

export default function SignUp() {
  const [showVerifyEmailPopUp, setShowVerifyEmailPopUp] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <Box
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100vh'
      }}
    > 
      {showVerifyEmailPopUp? (
        <VerifyEmailPopUp username={username} email={email}/>
      ) : (
        <Paper
          variant="outlined"
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
              <Typography variant="h5" color="#180439">
                Create Account
              </Typography>
            </Stack>
            <SignUpForm setUsername={setUsername} setEmail={setEmail} setShowVerificationEmailPopUp={setShowVerifyEmailPopUp} />
          </Container>
        </Paper>
      )}
    </Box>
  );
}