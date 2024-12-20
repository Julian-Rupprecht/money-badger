"use client";

import { TextField, Button, Typography, Link, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import axios from 'axios';


export default function SignInForm() {
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    if (emailError || passwordError) {
      return; 
    } 

    const data = new FormData(event.currentTarget);
    axios.post('/api/signin', data)
  }

  const validateInput = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    } 
    
    if (!password.value || password.value.length < 9) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must contain atleast 9 characters.');
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }
  }

  return(
    <Box
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid container alignItems="center" rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12}>
          <TextField
            error={emailError}
            helperText={emailErrorMessage} 
            required
            fullWidth
            id="email"
            name="email"
            label="E-Mail"
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
          />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography display="inline" fontSize={15}>
          <Link href="/forgotpw">Forgot password?</Link>
        </Typography>

        <Typography display="inline" fontSize={15}>
          {"Don't have an account? "}
          <Link href="/signup">Sign up</Link>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button 
          type="submit" 
          variant="contained"
          onClick={validateInput}
          fullWidth
          sx={{ 
            mt: 5, 
            borderRadius: 4,
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
}