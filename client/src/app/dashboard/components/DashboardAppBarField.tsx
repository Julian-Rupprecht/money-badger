import { Box, Button, Link, Typography } from "@mui/material";

export default function DashboardAppBarFields() {
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
          History
        </Link>
      </Typography>
      <Typography variant="h6">
        <Link 
          href="/signin" 
          sx={{ 
            color: "#180439",
            textDecoration: "none",
          }}
        >
          Groups
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
            href="/account" 
            sx={{ 
              color: "white",
              textDecoration: "none",
            }}
          >
          Account
          </Link>
        </Typography>
      </Button>
    </Box>
  );
}