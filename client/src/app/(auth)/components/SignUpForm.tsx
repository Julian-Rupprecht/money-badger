"use client";

import { TextField, Button, Typography, Checkbox, Link, FormControlLabel, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Dispatch, SetStateAction, useState } from 'react';
import axios from 'axios';

export default function SignUpForm(props: {
  setUsername: Dispatch<SetStateAction<string>>,
  setEmail: Dispatch<SetStateAction<string>>,
  setShowVerificationEmailPopUp: Dispatch<SetStateAction<boolean>>
}
) {
  const [emailError, setEmailError] = useState<boolean>(false);
  const [confirmEmailError, setConfirmEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [confirmEmailErrorMessage, setConfirmEmailErrorMessage] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState<string>('');
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    const isInputInvalid = await validateInputs(); 
    if (isInputInvalid) {
      return; 
    }

    const form = document.getElementById('signup-form') as HTMLFormElement;
    const formData = new FormData(form);
    let data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value: FormDataEntryValue, key: string) => {
      data[key] = value; 
    });
    
    try {
      const response = await axios.post('/api/signup', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status == 200) {
        props.setUsername(data["username"] as string);
        props.setEmail(data["email"] as string);
        props.setShowVerificationEmailPopUp(true);
      }

    } catch (error: unknown) {
      console.error(error); 
    }
  }
  
  const validateInputs = async () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const confirmEmail = document.getElementById('confirm-email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const confirmPassword = document.getElementById('confirm-password') as HTMLInputElement;
    const username = document.getElementById('username') as HTMLInputElement; 
    
    const errors = {
      emailError: false,
      emailErrorMessage: '',
      confirmEmailError: false,
      confirmEmailErrorMessage: '',
      passwordError: false,
      passwordErrorMessage: '',
      confirmPasswordError: false,
      confirmPasswordErrorMessage: '',
      usernameError: false,
      usernameErrorMessage: ''
    }

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      errors["emailError"] = true; 
      errors["emailErrorMessage"] = 'Please enter a valid email address.';
    } else if (email.value !== confirmEmail.value) {
      errors["confirmEmailError"] = true;
      errors["confirmEmailErrorMessage"] = 'Email addresses do not match.';
    } 

    if (!password.value || password.value.length < 9 || !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/.test(password.value)) {
      errors["passwordError"] = true;
      errors["passwordErrorMessage"] = 'Password must contain atleast 9 characters, 1 uppercase letter, 1 number and 1 special character.';
    } else if (password.value !== confirmPassword.value) {
      errors["confirmPasswordError"] = true;
      errors["confirmPasswordErrorMessage"] = 'Passwords do not match.';
    }
    
    if (!errors["emailError"]) {
      await axios.post("/api/available", JSON.stringify({email: email.value, username: username.value}), {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => {
        if (response.status == 200) {
          const data = response.data; 

          if (data["emailTaken"]) {
            errors["emailError"] = true;
            errors["emailErrorMessage"] = 'Email address already exists.';
          }

          if (data["usernameTaken"]) {
            errors["usernameError"] = true;
            errors["usernameErrorMessage"] = 'Username already exists.';
          }

        }
      }).catch(error => {
        console.error(error);
      });
    }

    setEmailError(errors["emailError"]);
    setEmailErrorMessage(errors["emailErrorMessage"]);
    setConfirmEmailError(errors["confirmEmailError"]);
    setConfirmEmailErrorMessage(errors["confirmEmailErrorMessage"]);
    setPasswordError(errors["passwordError"]);
    setPasswordErrorMessage(errors["passwordErrorMessage"]);
    setConfirmPasswordError(errors["confirmPasswordError"]);
    setConfirmPasswordErrorMessage(errors["confirmPasswordErrorMessage"]);
    setUsernameError(errors["usernameError"]);
    setUsernameErrorMessage(errors["usernameErrorMessage"]);
  
    return Object.values(errors).some(value => value === true);
  }

  return (
    <Box 
      component="form"
      id="signup-form"
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
            error={usernameError}
            helperText={usernameErrorMessage}
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
              <Link
                sx={{ 
                  color: "#180439",
                  textDecorationColor: "#180439"
                }}
              >
                general terms and conditions
              </Link>
            </Typography>
          }
        />
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button 
          type="submit" 
          variant="contained"
          fullWidth
          sx={{ 
            mt: 3,
            borderRadius: 3,
            backgroundColor: "#362f5a",
            textTransform: "none"
          }}
        > 
          <Typography>
            Sign Up  
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}