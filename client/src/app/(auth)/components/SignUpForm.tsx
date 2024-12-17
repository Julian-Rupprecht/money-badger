import { TextField, Button, Typography, Checkbox, Link, FormControlLabel, Box } from '@mui/material'
import Grid from '@mui/material/Grid'

export default function SignUpForm() {
  return (
    <form noValidate>
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="first-name"
            label="First Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required
            fullWidth
            id="last-name"
            label="Last Name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            required
            fullWidth
            id="email"
            label="E-Mail"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            required
            fullWidth
            id="confirm-email"
            label="Confirm E-Mail"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required
            fullWidth
            id="password"
            label="Password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            required
            fullWidth
            id="confirm-password"
            label="Confirm Password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          required
          fullWidth
          id="username"
          label="Username"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
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
          sx={{ 
            mt: 3, 
            borderRadius: 4
          }}
        >
          Sign Up
        </Button>
      </Box>
    </form>
  );
}