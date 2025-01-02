"use client";

import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useRouter } from "next/navigation";

export default function ActionButtons() {
  const router = useRouter();

  return (
    <Grid container rowSpacing={2} columnSpacing={10}> 
      <Grid 
        size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
        sx={{ 
          display: "flex",
          justifyContent: "center"
        }}
      >   
        <Button 
          fullWidth 
          variant="outlined"           
          sx={{
            borderColor: "#362f5a",
            backgroundColor: "#e2e4df",
            borderRadius: 3,
            boxShadow: 10,
            pl: 5,
            pr: 5,
            whiteSpace: "nowrap", 
            overflow: "hidden",
            textTransform: "none"
          }}
          onClick={() => router.push("/dashboard?join-group=true&open-group=false")}
        >
          <Typography variant="h6" color="#362f5a">
            Join Group
          </Typography>
        </Button>
      </Grid>
      <Grid 
        size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
        sx={{ 
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Button 
          fullWidth 
          variant="outlined"
          sx={{
            backgroundColor: "#362f5a",
            borderRadius: 3,
            boxShadow: 10,
            pl: 5,
            pr: 5,
            whiteSpace: "nowrap", 
            overflow: "hidden",
            textTransform: "none"
          }}
          onClick={() => router.push("/dashboard?join-group=false&open-group=true")}
        >
          <Typography variant="h6" color="white">
            Open Group
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}