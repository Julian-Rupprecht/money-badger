import { TextField, Button, Typography, Checkbox, Link, FormControlLabel, Box } from '@mui/material'
import Grid from '@mui/material/Grid'

export default function LoginForm() {
  return(
    <form noValidate>
      <Grid container alignItems="center" rowSpacing={2} columnSpacing={1}>
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
              id="password"
              label="Password"
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
          fullWidth
          sx={{ 
            mt: 5, 
            borderRadius: 4,
          }}
        >
          Log In
        </Button>
      </Box>
    </form>
  );
}
