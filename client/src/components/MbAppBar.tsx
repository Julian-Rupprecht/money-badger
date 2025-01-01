import { AppBar, Box, Container, Toolbar} from "@mui/material";
import React from 'react';

export default function MbAppBar({ children }: { children: React.ReactNode }) {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
      }}
    >
      <Box>
        <Toolbar 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: 3,
            backdropFilter: 'blur(24px)',
            border: '1px solid',
            borderColor: "#180439",
            backgroundColor: "#e2e4df",
            boxShadow: 10, 
            padding: '8px 12px',
          }} 
        >
          {children}
        </Toolbar>
      </Box>
    </AppBar>
  );
}