import { Box, Button, Link, Typography } from "@mui/material";

export default function SignInAndSignUpFieldAppBar() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap={2}
    >
      <Typography variant="h6">
        <Link 
          href="/signin" 
          sx={{ 
            color: "#180439",
            textDecoration: "none",
          }}
        >
          Sign in
        </Link>
      </Typography>
      <Button
        variant="contained"
        sx={{
          borderRadius: 3,
          backgroundColor: "#362f5a",
          textTransform: "none"
        }}
      >
        <Typography variant="h6">
          <Link 
            href="/signup" 
            sx={{ 
              color: "white",
              textDecoration: "none",
            }}
          >
          Sign up
        </Link>
      </Typography>
    </Button>
    </Box>
  );
}