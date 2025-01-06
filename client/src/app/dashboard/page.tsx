import ActionButtons from "@/components/ActionButtons";
import MbAppBar from "@/components/MbAppBar";
import MbLogo from "@/components/MbLogo";
import { Box } from "@mui/material";
import DashboardAppBarFields from "./components/DashboardAppBarField";

export default function dashboard() {
  return(
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <Box 
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "75%",
            lg: "75%",
            xl: "50%"
          }
        }}
        mt={1}
      >
        <MbAppBar>
          <MbLogo />
          <DashboardAppBarFields />
        </MbAppBar>
      </Box>
      <Box sx={{ flexGrow: 0.90 }} />
      <ActionButtons />
    </Box>
  );
}