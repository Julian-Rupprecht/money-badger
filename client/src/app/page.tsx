import ActionButtons from "@/components/ActionButtons";
import MbAppBar from "@/components/MbAppBar";
import MbLogo from "@/components/MbLogo";
import SignInFieldAppBar from "@/components/SignInAndSignUpFieldAppBar";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <Box width="75vw" mt={1}>
        <MbAppBar>
          <MbLogo />
          <SignInFieldAppBar />
        </MbAppBar>
      </Box>
      <Box sx={{ flexGrow: 0.90 }} />
      <ActionButtons />
    </Box>
  );
}