"use client";

import { Box, Button, Icon, IconButton, Link, Paper, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';

export default function VerifyEmailPopUp(props: {
  username: string, 
  email: string, 
}) {

  const router = useRouter(); 

  return (
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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="450px"
        m={3}
        mb={2}
      >
        <Box width="100%" display="flex" flexDirection="column" gap={1}>
          <Typography variant="h4" fontWeight="bold" color="#180439">
            Verify your email
          </Typography>  
          <Typography>
            Hi {props.username}, Please verify your email address by clicking the link sent to {(' ')} 
            <Typography component="span" fontWeight="bold" color="#180439">
              {props.email}
            </Typography>
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          fullWidth
          sx={{ 
            mt: 3,
            height: "50px",
            borderRadius: 3,
            backgroundColor: "#362f5a",
            textTransform: "none"
          }}
        >
          <Typography fontSize={18} fontWeight="bold">
            Resend Verification Email
          </Typography>
        </Button>
        <Box
          display="flex"
          justifyContent="flex-end"
          width="100%"
          mt={2}
        >
          <Button 
            onClick={() => router.push("/signin")}
            endIcon={<ExitToAppIcon sx={{ color: "#180439" }} />}
            sx={{ textTransform: "none" }}
          >
            <Typography color="#180439">
              Go to sign in 
            </Typography>
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}