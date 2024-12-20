"use client";

import { TextField, Button, Typography, Checkbox, Link, FormControlLabel, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import axios from 'axios';

export default function SignUpForm() {
  const [emailError, setEmailError] = useState<boolean>(false);
  const [confirmEmailError, setConfirmEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [confirmEmailErrorMessage, setConfirmEmailErrorMessage] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    if(emailError || confirmEmailError || passwordError || confirmPasswordError) {
      return; 
    }

    const data = new FormData(event.currentTarget);
    axios.post('/api/signup', data); 
  }
  
  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const confirmEmail = document.getElementById('confirm-email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const confirmPassword = document.getElementById('confirm-password') as HTMLInputElement;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
    } else if(email.value !== confirmEmail.value) {
      setConfirmEmailError(true);
      setConfirmEmailErrorMessage('Email addresses do not match.');
    } else {
      setEmailError(false);
      setConfirmEmailError(false); 
      setEmailErrorMessage('');
      setConfirmEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 9 || !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(password.value)) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must contain atleast 9 characters, 1 uppercase letter, 1 number and 1 special character')
    } else if (password.value !== confirmPassword.value) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('Passwords do not match.')
    } else {
      setPasswordError(false);
      setConfirmPasswordError(false);
      setPasswordErrorMessage('');
      setConfirmPasswordErrorMessage('');
    }
  }

  return (
    <Box 
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="first-name"
            name="first-name"
            label="First Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required
            fullWidth
            id="last-name"
            name="last-name"
            label="Last Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            required
            fullWidth
            type="email"
            id="email"
            name="email"
            label="E-Mail"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={confirmEmailError}
            helperText={confirmEmailErrorMessage}
            required
            fullWidth
            type="email"
            id="confirm-email"
            name="confirm-email"
            label="Confirm E-Mail"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            required
            fullWidth
            type="password"
            id="password"
            name="password"
            label="Password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={confirmPasswordError}
            helperText={confirmPasswordErrorMessage}
            required
            fullWidth
            type="password"
            id="confirm-password"
            name="confirm-password"
            label="Confirm Password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="username"
            name="username"
            label="Username"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          id="accept-terms"
          name="accept-terms"
          control={<Checkbox required value="accept-terms"/>}
          label={
            <Typography display="inline">
              {"I agree to the "}
              <Link>general terms and conditions</Link>
            </Typography>
          }
        />
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button 
          type="submit" 
          variant="contained"
          fullWidth
          onClick={validateInputs}
          sx={{ 
            mt: 3, 
            borderRadius: 4
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}